import Foundation
import Capacitor
import Vision

// On-device text recognition with Apple Vision. Nothing leaves the phone.
// Returns each recognised line with its box so the web side can rebuild receipt rows
// (item name on the left, price on the right) even when Vision splits them apart.
@objc(ReceiptOcrPlugin)
public class ReceiptOcrPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ReceiptOcrPlugin"
    public let jsName = "ReceiptOcr"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "recognize", returnType: CAPPluginReturnPromise)
    ]

    @objc func recognize(_ call: CAPPluginCall) {
        guard let path = call.getString("path") else {
            call.reject("missing path")
            return
        }
        let url: URL? = path.hasPrefix("file://") ? URL(string: path) : URL(fileURLWithPath: path)
        guard let imageURL = url else {
            call.reject("invalid path")
            return
        }

        DispatchQueue.global(qos: .userInitiated).async {
            let request = VNRecognizeTextRequest()
            request.recognitionLevel = .accurate
            request.usesLanguageCorrection = false // receipts are mostly numbers and short names
            let handler = VNImageRequestHandler(url: imageURL, options: [:])
            do {
                try handler.perform([request])
                var lines = JSArray()
                for obs in request.results ?? [] {
                    guard let top = obs.topCandidates(1).first else { continue }
                    var line = JSObject()
                    line["text"] = top.string
                    line["confidence"] = top.confidence
                    line["x"] = obs.boundingBox.origin.x
                    line["y"] = obs.boundingBox.origin.y
                    line["w"] = obs.boundingBox.size.width
                    line["h"] = obs.boundingBox.size.height
                    lines.append(line)
                }
                call.resolve(["lines": lines])
            } catch {
                call.reject(error.localizedDescription)
            }
        }
    }
}
