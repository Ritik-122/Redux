import classes from './Counter.module.css';
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
const Counter = () => {
  const counter=useSelector(state=>state.counter);
  const toggleCounterHandler = () => {};
const dispatch=useDispatch()
const increamentHandler=()=>{
  dispatch({type:'increament'})
}
const decreamentHandler=()=>{
  dispatch({type:'decreament'})
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div><button onClick={increamentHandler} >Increament by 5</button><button onClick={decreamentHandler}>Decreament by 5</button></div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
