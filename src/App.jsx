import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Faq from './pages/Faq.jsx'
import HowToSplitABill from './pages/HowToSplitABill.jsx'
import History from './pages/History.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Info from './pages/Info.jsx'
import { GuidesIndex, GuidePage } from './pages/Guides.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/how-to-split-a-bill" element={<HowToSplitABill />} />
        <Route path="/guides" element={<GuidesIndex />} />
        <Route path="/guides/:slug" element={<GuidePage />} />
        <Route path="/history" element={<History />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/info" element={<Info />} />
      </Route>
    </Routes>
  )
}
