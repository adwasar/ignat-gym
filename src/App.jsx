import Header from './components/Header'
import Footer from './components/Footer'
import HeroSlider from './components/HeroSlider'
import GreatFriendsSection from './components/GreatFriendsSection'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <HeroSlider />
        <GreatFriendsSection />
        <div className="container">
          <h1>Title</h1>
          <h2>Title</h2>
          <h3>Title</h3>
          <h4>Title</h4>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
