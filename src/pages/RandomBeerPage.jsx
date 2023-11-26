import { useEffect, useState } from "react";
import "./randombeerpage.css";

function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState();

    console.log(randomBeer)

    const getRandomBeer = async () => {
        const data = await fetch("https://ih-beers-api2.herokuapp.com/beers/random");
        const dataJson = await data.json();
        setRandomBeer(dataJson);
        console.log(randomBeer)
    }

    useEffect(() => {
        getRandomBeer();
    }, [])


    if (!randomBeer) {
        return (<div> Loading... </div>)
    }

    return (
        <div className="randomBeer-box">
            <div className="left">
                <img src={randomBeer.image_url} />
            </div>
            <div className="random-info">
                <h1>{randomBeer.name}</h1>
                <h2>{randomBeer.tagline}</h2>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
            </div>
        </div>
    )
}
export default RandomBeersPage;
