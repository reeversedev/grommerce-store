export interface Product {
  id: string;
  name: string;
  volume: string;
  mrp: number;
  price: number;
  img: string;
  quantity: number;
}

export const cart: Array<Product> = JSON.parse(
  JSON.parse(JSON.stringify(localStorage.getItem('cart')))
);

export const addToCart = (product: Product) => {
  if (Array.isArray(cart)) {
    const existingProduct = cart.find((p: Product) => p.id === product.id);
    if (existingProduct) {
      // If Product already exists inside the cart
      const existingProductIndex = cart.indexOf(existingProduct);
      cart[existingProductIndex].quantity++;
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      // If it's a new Product
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  } else {
    // If Cart doesn't exist at all
    const newCart = [];
    newCart.push(product);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }
  return JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('cart'))));
};

export const removeFromCart = (product: Product) => {
  if (Array.isArray(cart)) {
    const existingProduct = cart.find((p: Product) => p.id === product.id);
    if (existingProduct) {
      // If Product already exists inside the cart
      const existingProductIndex = cart.indexOf(existingProduct);
      if (cart[existingProductIndex].quantity === 1) {
        // If quantity is 1, product will be removed from the cart
        cart.splice(existingProductIndex, 1);
      } else {
        // Only quanitty will be reduced by 1
        cart[existingProductIndex].quantity--;
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
  return JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('cart'))));
};
