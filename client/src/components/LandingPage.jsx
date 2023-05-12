import  "../styles/LandingPage.css";
import { useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getCountries } from '../redux/actions';


const LandingPage= () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const startCountries = ()=>{
        dispatch(getCountries(getCountries()));
        navigate("/loading");
    }
    return (
        <div className="landingPage">
            <h1 className="title">Traveling Countries</h1>
            <button className="button-ingresar" onClick={startCountries}>
                Ingresar
            </button>
        </div>
    )
}

export default LandingPage