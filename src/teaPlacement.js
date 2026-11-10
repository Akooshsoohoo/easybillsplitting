// Placement per animal and accessory. x,y are in the 120x130 character space, tilt in degrees.
// Tuned by hand with the placer tool. Used by teaScene.js.
export const PLACEMENT = {
  fox: {
    tophat: { x: 55.5, y: 36, tilt: 9 },
    bowler: { x: 55, y: 36.5, tilt: 9 },
    crown: { x: 53.5, y: 37.5, tilt: 6 },
    monocle: { x: 60, y: 42, tilt: 0 },
    glasses: { x: 60, y: 42, tilt: 0 },
    bowtie: { x: 50, y: 61, tilt: 0 },
    scarf: { x: 51, y: 56, tilt: 12 },
  },
  frog: {
    tophat: { x: 45, y: 39.5, tilt: -47 },
    bowler: { x: 45, y: 40, tilt: -48 },
    crown: { x: 46.5, y: 41.5, tilt: -45 },
    monocle: { x: 59, y: 37.5, tilt: 0 },
    glasses: { x: 58, y: 37, tilt: 0 },
    bowtie: { x: 50, y: 62, tilt: 0 },
    scarf: { x: 51.5, y: 58, tilt: 10 },
  },
  sloth: {
    tophat: { x: 50.5, y: 35, tilt: -19 },
    bowler: { x: 50.5, y: 35, tilt: -19 },
    crown: { x: 51, y: 35.5, tilt: -16 },
    monocle: { x: 61, y: 43, tilt: 0 },
    glasses: { x: 60.5, y: 43, tilt: 0 },
    bowtie: { x: 50.5, y: 63.5, tilt: 0 },
    scarf: { x: 51, y: 57.5, tilt: 13 },
  },
  penguin: {
    tophat: { x: 55.5, y: 32.5, tilt: 11 },
    bowler: { x: 55.5, y: 34, tilt: 11 },
    crown: { x: 52, y: 35, tilt: -13 },
    monocle: { x: 60, y: 42, tilt: 0 },
    glasses: { x: 60, y: 42, tilt: 0 },
    bowtie: { x: 50, y: 62, tilt: 0 },
    scarf: { x: 51, y: 54, tilt: 10 },
  },
  capybara: {
    tophat: { x: 50, y: 36.5, tilt: -24 },
    bowler: { x: 50, y: 36.5, tilt: -25 },
    crown: { x: 50, y: 37, tilt: -21 },
    monocle: { x: 62, y: 41, tilt: 0 },
    glasses: { x: 62, y: 41, tilt: 0 },
    bowtie: { x: 50, y: 60, tilt: 0 },
    scarf: { x: 52, y: 56, tilt: 6 },
  },
}
