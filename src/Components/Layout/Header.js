import {Fragment} from 'react';
import Meals from '../../Assets/meals.jpg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {

return (
  <Fragment>
    <header className={classes.header}>
      <h1>React Meals</h1>
      <HeaderCartButton onCart={props.onCart}/>
    </header>
    <div className={classes["main-image"]}>
      <img src={Meals} alt="A table full of delicious food!" />
    </div>
  </Fragment>
);
}

export default Header;