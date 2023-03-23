import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../store';
const Header = () => {
  const isLoggedIn=useSelector((state)=>state.auth.isAuthenticated)
  const dispatch=useDispatch()
  
  const logout=()=>{
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
         {isLoggedIn && <li>
            <a href='/'>My Products</a>
          </li>}
          {isLoggedIn && <li>
            <a href='/'>My Sales</a>
          </li>}
          <li> 
           {isLoggedIn && <button onClick={logout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
