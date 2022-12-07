import { useState } from "react";
import { useQuery } from "react-query";
//components
import Drawer  from "@mui/material/Drawer";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from "@mui/material/Badge";
//styles
import { Wrapper } from "./app.styles";
import { StyledButton } from "./app.styles";
import Item from "./Item/Item";
import Cart from "./Cart/Cart";
import { cursorTo } from "readline";

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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);
  console.log(data)
  const getTotalItems = (itemList: CartItemType[]) => itemList.reduce((acc: number, itemList) => acc + itemList.amount, 0);
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      //is item in cart
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if(isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id ?
          {...item, amount: item.amount+1} :
          item
          ))
      }
      return [...prev, {...clickedItem, amount: 1}]
    })
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, cur) => {
        if(cur.id === id) {
          if(cur.amount === 1) return acc;
          acc.push({...cur, amount: cur.amount - 1});
        }
        else acc.push({...cur});
        return acc;
      }, [] as CartItemType[]
      ))
    );
  };
  if(isLoading) return <LinearProgress />;
  if(error) return <div>Something went wrong</div>
  return (
    <Wrapper>
      <Drawer anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <StyledButton onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
          </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id}xs ={12} sm={4}><Item item={item} handleAddToCart={handleAddToCart}></Item></Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
