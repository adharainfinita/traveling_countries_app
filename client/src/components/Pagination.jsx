import { useDispatch, useSelector } from "react-redux"

import { nextPage, prevPage } from "../redux/actions";

export const Pagination = ({pagesStack}) =>{
    const numPage = useSelector((state) => state.page);
    const dispatch = useDispatch();
    
    const next =()=> dispatch(nextPage());
    const prev=()=> dispatch(prevPage());

    console.log(numPage);
    console.log(pagesStack);

    return (
        <div className="pagination">
        {
            numPage > 1 ? 
            <div>
                <button onClick={prev}>PREV</button>
                <p>{numPage-1}</p>
            </div>
            :null
        }
        {
            numPage < pagesStack ?(
            <div>
                <p>{numPage+1}</p>
                <button onClick={next}>NEXT</button>
            </div>)
            :null
        }
        </div>
    )
}