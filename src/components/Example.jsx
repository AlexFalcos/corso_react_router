import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

function Example() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleClickIncrementa = () => {
        dispatch(increment());
    }

    const handleClickDescrementa = () => {
        dispatch(decrement());
    }

    return (
        < div >
            <p>Conteggio: {count}</p>
            <button onClick={handleClickIncrementa}>Incrementa +</button>
            <button onClick={handleClickDescrementa}>Descrementa -</button>
        </div >
    );
}

export default Example;