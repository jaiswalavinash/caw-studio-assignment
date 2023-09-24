import React from "react";
import './App.css'
import Header from './components/Header/Header';
import OrderConfirmation from "./components/OrderDetails/OrderConfirmation";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";

const App = () => {
  return(
    <React.Fragment>
      <Header />
      <OrderConfirmation />
      <OrderDetails />
      <ProductDisplay />
    </React.Fragment>
  )
}
export default App
