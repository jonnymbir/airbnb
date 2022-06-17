import Filter from "../../Components/Filter/Filter"
import Header from "../../Components/Header/Header"
import Places from "../../Components/Places/Places"
import "./Home.css"

const Home = () => {
  return (
    <div>
       <Header/>
       <Filter/>
       <div className="homePlaces">
            <Places/>
       </div>
    </div>
  )
}

export default Home