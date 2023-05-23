import { useState } from "react"
import { useDispatch } from "react-redux";
import { postActivity } from "../redux/actions";
import validate from "../utils/validate";
import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import styles from "../styles/Form.module.css";

const Form = () => {
    const dispatch = useDispatch();
    const {countries} = useSelector(state => state);
    const navigate = useNavigate();

    const [newCountry, setNewCountry] = useState('');
    const [activityData, setActivityData] = useState({
        name: "",
        difficulty:  0,
        duration: 0,
        season: "",
        countries: []
    });

    const [errors, setErrors] = useState({
        name: "",
        difficulty:  "",
        duration: "",
        season: "",
        countries: ""
    })

const handleOnChange = (event) =>{
    setActivityData({
        ...activityData,
        [event.target.name]: event.target.value
    });

    setErrors(
        validate({
            ...activityData,
            [event.target.name]: event.target.value
        })
    )
}
const addCountry = () =>{
    let validateCountry = countries.find(country => country.name === newCountry);
    if(validateCountry){
        setActivityData({
        ...activityData,
        countries: [...activityData.countries, validateCountry.id]
        });
        setNewCountry("");
    }
    else{
        setErrors({
        ...errors,
        countries: "No existe el país elegido"
    })
    }
}
const cancelForm = () =>{
    navigate("/loading");
}
const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(postActivity(activityData));
    navigate("/loading");
    alert("Actividad creada con éxito")
}

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <button className={styles.cancel} onClick={cancelForm} >X</button>
            <h1 className={styles.principalTitle}>Crea tu propia actividad</h1>
            <section className={styles.sections} >
                <h4 className={styles.titles}>Nombre</h4>
                <div className={styles.selections}>
                    <label htmlFor="name" className={styles.label}>Nombre de la actividad:</label>
                <input 
                className={styles.input}
                name="name" 
                type="text" 
                placeholder="Ingrese el nombre de la actividad"
                onChange={handleOnChange}
                // value={activityData.name}
                />
                </div>
                {errors.name && <p className={styles.errors}>{errors.name}</p>}
            </section>

            <section className={styles.sections}>
                <h4 className={styles.titles}>Dificultad:</h4>
                <div className={styles.selections}>
                <label htmlFor="difficulty" className={styles.label}>Elige la dificultad de la actividad:</label>
                <input 
                type="range" 
                id="difficulty" 
                name="difficulty" 
                min="1" max="5"
                onChange={handleOnChange}
                />
                </div>
                
                {errors.difficulty && <p className={styles.errors}>{errors.difficulty}</p>}
            </section>

            <section className={styles.sections}>
                <h4 className={styles.titles}>Duración</h4>
                <div className={styles.selections}>
                <label htmlFor="duration" className={styles.label}>Elige el tiempo que durará
                la actividad en horas:</label>
                <input 
                type="time" 
                name="duration" 
                onChange={handleOnChange}
                />
                </div>
                
                {errors.duration && <p className={styles.errors}>{errors.duration}</p>}
            </section>
            <section className={styles.sections}>
                <h4 className={styles.titles}>Estación</h4>
                <div className={styles.selections}>
                <label htmlFor="season" className={styles.label}>Elige una de las 4 estaciones</label>
                <label className={styles.radio}>
                    <input  type="radio" name="season" onChange={handleOnChange} value="Summer"/>Summer
                </label>
                <label className={styles.radio}> 
                    <input type="radio" name="season" onChange={handleOnChange} value="Autum"/>Autum
                </label>
                <label className={styles.radio}> 
                    <input type="radio" name="season" onChange={handleOnChange} value="Winter"/>Winter
                </label>
                <label className={styles.radio}> 
                    <input type="radio" name="season" onChange={handleOnChange} value="Spring"/>Spring
                </label>
                </div>
                
                {errors.season && <p className={styles.errors}>{errors.season}</p>}
            </section>
            <section className={styles.sections}>
                <h4 className={styles.titles}>Países anfitriones</h4>
                <div className={styles.selections}>
                    <label htmlFor="countries" className={styles.label}>¿En qué países tendrá lugar la actividad?</label>
                <input 
                className={styles.input}
                type="text" 
                name="countries" 
                placeholder="Elije un país"
                value={newCountry}
                onChange={(event) => setNewCountry(event.target.value)}
                />
                <button
                className={styles.buttons}
                type="button"
                onClick={addCountry}
                >Agregar</button>
                </div>
                <div className={styles.countries}>{activityData.countries.length} países agregados</div>
                {errors.countries && <p className={styles.errors}>{errors.countries} </p>}
            </section>

            <button
            className={styles.buttonSubmit}
            type="button"
            onClick={handleSubmit}
            disabled={
                !Object.values(errors).every((value) => value === "") 
                || !activityData.name || !activityData.difficulty || !activityData.duration
                || !activityData.season
            }>
                Crear Actividad
            </button>
        </form>
    )
}

export default Form