import React, {useState} from 'react';
import Cart from "./Components/Cart/Cart";
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartContextProvider from './Source/cart_context-provider';


function App() {
  const [showModal, setShowModal] = useState(false);
  
  const showModalHandler = props =>{
    setShowModal(true);
  } 

  const hideModalHandler = (props) => {
    setShowModal(false);
  }; 

  return (
    <CartContextProvider>
      {showModal && <Cart onHideModal={hideModalHandler}/>}
      <Header onCart={showModalHandler}/>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
