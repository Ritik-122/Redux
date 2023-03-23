import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { counterActions } from "../store";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const increamentHandler = () => {
    dispatch(counterActions.increament());
  };
  const decreamentHandler = () => {
    dispatch(counterActions.decreament());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increament </button>
        <button onClick={decreamentHandler}>Decreament </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
