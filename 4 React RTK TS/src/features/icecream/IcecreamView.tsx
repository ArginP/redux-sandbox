import { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from "../../app/hooks.ts";
import { ordered, restocked } from "./icecreamSlice.ts";

export const IcecreamView = () => {
    const [value, setValue] = useState(1);

    const numOfIcecreams = useAppSelector((state) => state.icecream.numOfIcecreams)
    // icecream - название редюсера из store.js
    // numOfIcecreams задается в слайсе в initialState

    const dispatch = useAppDispatch()

    return (
        <>
            <div>
                <h2>Number of ice creams - {numOfIcecreams}</h2>
                <button onClick={() => dispatch(ordered(1))}>Oder ice cream</button>
                <input type="number" value={value} onChange={e => setValue(Number(e.target.value))} />
                <button onClick={() => dispatch(restocked(value))}>Restock ice creams</button>
            </div>
        </>
    )
}
