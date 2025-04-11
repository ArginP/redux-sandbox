import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from "./cakeSlice.js";

export const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    // cake - название редюсера из store.js
    // numOfCakes задается в слайсе в initialState

    const dispatch = useDispatch()

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
