import { useNavigate } from "react-router-dom"

const Loading =()=>{
const navigate = useNavigate();
setTimeout(()=> navigate("/countries"), 2500)

    return <img src="https://media.tenor.com/U_avfn4Np9wAAAAd/work-angry.gif" alt="loading"></img>
}

export default Loading