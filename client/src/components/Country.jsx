import "../styles/Country.css";
import { Link } from "react-router-dom";

const Country = ({id, name, flag, continent}) => {
    console.log(id);
    return (
        <div className="card">
            <Link to={`/countries/detail/${id}`}> <h1>{name}</h1>
            <img src={flag} alt="flagImg" className="flag"/>
            <h3>{continent}</h3>
            </Link>
        </div>
    )
}

export default Country;