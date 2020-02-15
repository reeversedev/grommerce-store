export interface Product {
  id: string;
  name: string;
  volume: string;
  price: string;
  img: string;
  quantity: number;
}

export const addToCart = (product: Product) => {
  const cart = JSON.parse(
    JSON.parse(JSON.stringify(localStorage.getItem('cart')))
  );

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
};
