import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  // const { cartItems } = useContext(CartContext);
  // const { isCartOpen } = useContext(CartContext)

  const addProduct = () => {
    // console.log('hello, product!!');
    // console.log(addItemToCart);
    addItemToCart(product);
  }
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProduct}>Add to card</Button>
    </div>
  );
};

export default ProductCard;
