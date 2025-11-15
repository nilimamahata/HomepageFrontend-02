import Navbar from './Navbar'
import LandingHeader from './LandingHeader'
import MainGrid from './MainGrid'
import LowerGrid from './LowerGrid'
import Feedback from './Feedback'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <LandingHeader />
      <MainGrid />
      <LowerGrid />
      <Feedback/>
      <Footer />
    </div>
  )
}

export default App
