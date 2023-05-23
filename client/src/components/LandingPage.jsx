import styles from "../styles/LandingPage.module.css";
import { useNavigate} from "react-router-dom";



const LandingPage= () =>{
    const navigate = useNavigate();
    const startCountries = ()=>{
        navigate("/loading");
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.shapeL} ></div>   
                <h1 className={styles.title}>Traveling Countries</h1>
                
            </div>
        <button className={styles.button} onClick={startCountries}>
                    INGRESAR
                </button>
        </div>
    )
}

export default LandingPage