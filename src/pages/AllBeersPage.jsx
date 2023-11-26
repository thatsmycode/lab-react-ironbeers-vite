import { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import "./allbeerspage.css"

function AllBeersPage() {
    const urlApi = "https://ih-beers-api2.herokuapp.com/beers";
    const [beers, setBeers] = useState([]);
    

    const getData = async () => {
        try {
            const data = await fetch(urlApi);
            const dataJson = await data.json();
            const beerList = dataJson;
            setBeers(beerList);
        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        getData();
       
    }, [])


    return (
        <div className="allbeers-box">
        {beers.map((eachBeer)=>{
            return(
                <div className="card" key={eachBeer._id}>
                    <Link to={`/beers/${eachBeer._id}`}><img className="img-beer" src={eachBeer.image_url}></img></Link>
                    <h2>{eachBeer.name}<span>{eachBeer.first_brewed}</span></h2>
                    <h3>{eachBeer.tagline}</h3>
                    <h4>{eachBeer.contributed_by}</h4>
                </div>
            )
        })}
        </div>
    )
}

export default AllBeersPage;
