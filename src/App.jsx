import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import data from './data'
function App() {
  const cards = data.map(d => 
    <Card 
      key={d.id} 
      imgUrl={d.coverImg} 
      openSpots={d.openSpots}
      starsNote={d.stats.rating} 
      commentsCount={d.stats.reviewCount} 
      location={d.location}
      subtitle={d.title}
      price={d.price}
    />
  )

  return (
    <main>
     <Navbar/>
     <Hero/>
     <div className="cards-roll">
        {cards}
     </div>
    </main>
  )

}

export default App
