import styles from "../styles/SideBar.module.css"
import {useDispatch} from "react-redux";
import { orderCountries,filterCountries} from "../redux/actions";
import SearchBar from "./SeachBar";

const SideBar = () => {
    const dispatch = useDispatch();

const handleOrder =(event)=>{
        dispatch(orderCountries(event.target.value));
    }   

const handleFilter =(event) =>{
        dispatch(filterCountries(event.target.value));
}

    return(
        <main className={styles.menu}>
            <section className={styles.sections}>
                <h4 className={styles.titles} >BUSCAR</h4>
                <SearchBar/>
            </section>
            <hr className={styles.separator}/>
            <section className={styles.sections}>
                <h4 className={styles.titles}>ORDENAR</h4>
                    <label className={styles.options} htmlFor="NOMBRE">Nombre: </label>
                    <select name="NOMBRE" className={styles.selects} onChange={handleOrder}>
                        <option value="A">Ascendente</option>
                        <option value="D">Descendente</option>
                    </select>
                    <label className={styles.options} htmlFor="Población">Población: </label>
                    <select name="Población" className={styles.selects} onChange={handleOrder}>
                        <option value="MAX">Ascendente</option>
                        <option value="MIN">Descendente</option>
                    </select>
            </section>
            <hr className={styles.separator}/>
            <section className={styles.sections}>
                <h4 className={styles.titles}>FILTRAR</h4>
                <label className={styles.options} htmlFor="Continent">Continente: </label>
                <select name="Continente" className={styles.selects} onChange={handleFilter}>
                    <option value="/All">Todos</option>
                    <option value="/Africa">Africa</option>
                    <option value="/Asia">Asia</option>
                    <option value="/North America">America(Norte)</option>
                    <option value="/South America">America(Sur)</option>
                    <option value="/Europe">Europa</option>
                    <option value="/Oceania">Oceanía</option>
                    <option value="/Antarctica">Antarctica</option>
                </select>
                <label className={styles.options} htmlFor="subregion">Región: </label>
                <select name="subregion" className={styles.selects} onChange={handleFilter}>
                    <option value="*All">Todos</option>
                    <option value="*Southern Europe">Europa del Sur</option>
                    <option value="*Central Europe">Europa Central</option>
                    <option value="*Northern Europe">Europa del Norte</option>
                    <option value="*Eastern Europe">Europa Oriental</option>
                    <option value="*Western Europe">Europa Occidental</option>
                    <option value="*Southern Africa">Africa del Sur</option>
                    <option value="*Northern Africa">Africa del Norte</option>
                    <option value="*Middle Africa">Africa Media</option>
                    <option value="*Eastern Africa">Africa Oriental</option>
                    <option value="*Western Africa">Africa Occidental</option>
                    <option value="*South-Eastern Asia">Sureste Asiatico</option>
                    <option value="*Eastern Asia">Asia Oriental</option>
                    <option value="*Central Asia">Asia central</option>
                    <option value="*Western Asia">Asia Occidental</option>
                    <option value="*Southern Asia">Asia del Sur</option>
                    <option value="*North America">Norteamerica</option>
                    <option value="*Caribbean">Caribe</option>
                    <option value="*Central America">America Central</option>
                    <option value="*South America">Sudamerica</option>
                    <option value="*Australia and New Zealand">Australia && Nueva Zelanda</option>
                    <option value="*Polynesia">Polinesia</option>
                    <option value="*Micronesia">Micronesia</option>
                    <option value="*Melanesia">Melanesia</option>
                </select>
                <label className={styles.options} htmlFor="activities">Países con actividades turísticas</label>
                <select name="activities" className={styles.selects} onChange={handleFilter}>
                    <option value="ACT">Todas las ctividades</option>
                    <option value="All">Todos</option>
                </select>
            </section>
        </main>
    )
}

export default SideBar