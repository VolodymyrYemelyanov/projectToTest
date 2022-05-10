import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-items.styles.scss';

const CheckoutItems = ({product}) => {
	const {imageUrl, name, quantity, price} = product;
	const {removeItemFromCart, handleItemQuantity} = useContext(CartContext);
	const increase = 'plus';

	const deleteProduct = () => {
		removeItemFromCart(product);
	}

	const decreaseValue = () => {
		if(quantity > 1) {
			handleItemQuantity(product);
		} else {
			alert('last product!');
		}
	}

	const increaseValue = () => {
		handleItemQuantity(product, increase);
	}

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={name} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<span className='arrow' onClick={decreaseValue}>&#10094;</span>
				<span className='value'>{quantity}</span>
				<span className='arrow' onClick={increaseValue}>&#10095;</span>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={deleteProduct}>&#10005;</div>
		</div>
	);
}

export default CheckoutItems;