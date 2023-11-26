import {Link} from "react-router-dom";
import "./homepage.css";
function HomePage() {



return(
    <><div className="block">
    <Link to="/beers"><img src="src\assets\beers.png" alt="" /></Link>
    <h1>All Beers</h1>
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </h2>
    </div>
    <div className="block">
    <Link to="/random-beer"><img src="src\assets\random-beer.png" alt="" /></Link>
    <h1>Random Beer</h1>
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
    </div>
    <div className="block">
    <Link to="/new-beer" ><img src="src\assets\new-beer.png" alt="" /></Link>
    <h1>New Beer</h1>
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.r</h2>
    </div>
    </>
)

}

export default HomePage;
