// export interface Product {
//   id: string;
//   name: string;
//   volume: string;
//   price: string;
//   img: string;
// }

// export const addToCart = (product: Product) => {
//   console.log('product', product);
//   let cart: Array<Product> = [];
//   if (
//     localStorage.getItem('cart') &&
//     Array.isArray(JSON.parse(localStorage.getItem('cart')))
//   ) {
//     console.log('type', typeof cart);
//     cart = JSON.parse(localStorage.getItem('cart'));
//     cart.push(product);
//   } else if (typeof product === 'string') {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }
//   return true;
// };
