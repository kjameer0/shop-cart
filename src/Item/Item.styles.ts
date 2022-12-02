import styled from "styled-components";
let style: {
  'display': string;
  'justify-content': string;
  'flex-direction': string;
  'width': string;
  'border': string;
  'borderradius': string;
  'height': string;
} = {
  'display': 'flex',
  'justify-content': 'space-between',
  'flex-direction': 'column',
  'width': '100%',
  'border': '1px solid lightblue',
  'borderradius': '20px',
  'height': '100%'
}
let button = {
  'border-radius': '0 0 20px 20px',
}
let img = {
  'max-height': '250px',
  'object-fit': 'cover',
  'border-radius': '20px 20px 0 0'
}
let div = {
  'font-family': 'Arial, Helvetica, sans-serif',
  'padding': '1rem',
  'height': '100%'
}
export const Wrapper = styled.div({...style, button: {...button}, img: {...img}, div: {...div}});



//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   width: 100%;
//   border: 1px solid lightblue;
//   border-radius: 20px;
//   height: 100%;
//   button {
//     border-radius: 0 0 20px 20px;
//   }
//   img {
//     max-height: 250px;
//     object-fit: cover;
//     border-radius: 20px 20px 0 0;
//   }
//   div {
//     font-family: Arial, Helvetica, sans-serif;
//     padding: 1rem;
//     height: 100%;
//   }
// `;
