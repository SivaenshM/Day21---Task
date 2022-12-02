import React, { useContext } from "react";
import CarouselComponent from "./CarouselComponent";
import ItemList from "./ItemList";
import cartContext from "./CartContext";

function Home() {
  const { state } = useContext(cartContext); 
  return (
    <div>
      <CarouselComponent />
      <ItemList products={state.products} />
    </div>
  );
}

export default Home;