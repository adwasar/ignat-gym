import Header from './components/Header'
import Footer from './components/Footer'
import HeroSlider from './components/HeroSlider'
import GreatFriendsSection from './components/GreatFriendsSection'
import HottestProductsSection from './components/HottestProductsSection'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <HeroSlider />
        <GreatFriendsSection />
        <HottestProductsSection />
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
