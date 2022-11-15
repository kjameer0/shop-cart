import { useState } from "react";
import { useQuery } from "react-query";
import Drawer  from "@mui/material/Drawer";
import LinearProgres from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/material/Icon";
import Badge from "@mui/material/Badge";
import { Wrapper } from "./app.styles";
export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number
}

const getProducts = async (): Promise<CartItemType> => await(await fetch("https.://fakestoreapi.com/products")).json()


const App = () => {
  return (
    <div className="App">Start</div>
  );
}

export default App;
