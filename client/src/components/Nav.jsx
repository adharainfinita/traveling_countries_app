import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchBar from "./SeachBar";
import "../styles/Nav.css"

const Nav = () => {
    const location = useLocation();


    return(
        <div className="Nav">
            <h1>Traveling Countries</h1>
            <div>
                <button className="btn"><Link className="link" to="/">Log out</Link></button> 
            <SearchBar/>
            { location.pathname === "/activities" 
                    ? <button className="btnHere">
                        <Link className="link" to="/activities">Activities</Link>
                    </button>
                    : <button className="btn">
                        <Link className="link" to="/activities">Activities</Link>
                    </button>
            }
            { location.pathname === "/countries" 
                    ? <button className="btnHere"><Link className="link" to="/countries" >Countries</Link>
                    </button>
                    : <button className="btn"><Link className="link" to="/countries" >Countries</Link>
                    </button>
            }
            </div>
        </div>
    )
}

export default Nav