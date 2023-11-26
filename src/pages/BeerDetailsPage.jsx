import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import "./beerdetailspage.css";
 

const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

const BeerDetailsPage = () => {

  const [selectedBeer, setSelectedBeer] = useState(null)
  const {beerId} = useParams()

  useEffect(() => {
    axios
      .get(`${API_URL}/${beerId}`)
      .then((response) => {
        setSelectedBeer(response.data)
        console.log("selected beer data: ", response)
      })
  }, [beerId])

  if (!selectedBeer){
    return (<div> Loading... </div>)
  }

    return (
        <>
        <div className="beer-card">
          
        <img src={selectedBeer.image_url} alt={selectedBeer.name} /> 
        <div className="beer-info">
        <h1>{selectedBeer.name}</h1>
        <h1>{selectedBeer.tagline}</h1>
        <p>{selectedBeer.attenuation_level}</p>
        <p>{selectedBeer.first_brewed}</p>
        <p>{selectedBeer.description}</p>
        <p>{selectedBeer.contributed_by}</p>
        </div>
        </div>
    </>
    )

}
export default BeerDetailsPage;
