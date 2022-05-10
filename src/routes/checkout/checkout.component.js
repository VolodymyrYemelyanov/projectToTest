import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutItems from '../../components/checkout-items/checkout-items.components';

import './checkout.styles.scss';

const Checkout = () => {
	const { cartCount, cartItems, cartTotal } = useContext(CartContext);
	console.log('cartCount;');
	console.log(cartCount);
	// const total = cartItems.reduce((total, cartItem) => 
	// 		total + (cartItem.quantity * cartItem.price)
	// 	, 0);

	return (
		<div>
		{(cartCount > 0) ? 
			<div className='checkout-container'>
				<div className='checkout-header'>
					<div className='header-block'>
						<span>Product</span>
					</div>
					<div className='header-block'>
						<span>Description</span>
					</div>
					<div className='header-block'>
						<span>Quantity</span>
					</div>
					<div className='header-block'>
						<span>Price</span>
					</div>
					<div className='header-block'>
						<span>Remove</span>
					</div>
				</div>
				{cartItems.map(item => <CheckoutItems key={item.id} product={item}/>)}
				<div className='total'>Total: ${cartTotal}</div>
			</div> : 
			(<div>Checkout page empty</div>)}
		</div>
	);
}

export default Checkout;