import { useState } from "react";
import { useQuery } from "react-query";
import Drawer  from "@mui/material/Drawer";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/material/Icon";
import Badge from "@mui/material/Badge";
import { Wrapper } from "./app.styles";
import Item from "./Item/Item";
export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> => await(await fetch("https://fakestoreapi.com/products")).json();




const App = () => {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
  console.log(data)
  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;
  if(isLoading) return <LinearProgress />;
  if(error) return <div>Something went wrong</div>
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id}xs ={12} sm={4}><Item item={item} handleAddToCart={handleAddToCart}></Item></Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
