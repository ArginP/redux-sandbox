// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from "../../app/hooks.ts";
import { ordered, restocked } from "./cakeSlice.ts";


export const CakeView = () => {
    const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)
    // cake - название редюсера из store.js
    // numOfCakes задается в слайсе в initialState

    const dispatch = useAppDispatch()

    return (
        <>
            <div>
                <h2>Number of cakes - {numOfCakes}</h2>
                <button onClick={() => dispatch(ordered(1))}>Order cake</button>
                <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
            </div>
        </>
    )
}
