import Header from './components/Header'
import Footer from './components/Footer'
import HeroSlider from './components/HeroSlider'
import GreatFriendsSection from './components/GreatFriendsSection'
import HottestProductsSection from './components/HottestProductsSection'
import PromoFormSection from './components/PromoFormSection'
import ReviewsSection from './components/ReviewsSection'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <HeroSlider />
        <GreatFriendsSection />
        <HottestProductsSection />
        <PromoFormSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
