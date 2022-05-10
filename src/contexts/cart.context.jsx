import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
	// debugger;
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);
	// console.log(':::::');
	// console.log(existingCartItem);

	if(existingCartItem) {
		return cartItems.map(cartItem => (
			cartItem.id === productToAdd.id ? 
			{...cartItem, quantity: cartItem.quantity + 1} :
			cartItem
		));
	}

	return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, productToRemove) => {
	return cartItems.filter(cartItem => (
		cartItem.id !== productToRemove.id
	));
}

const handleQuantity = (cartItems, productQuantityToHandle, action) => {
	if(action === 'plus') {
		return cartItems.map(cartItem => (
			cartItem.id === productQuantityToHandle.id ? 
			{...cartItem, quantity: cartItem.quantity + 1} :
			cartItem
		));
	} else {
		return cartItems.map(cartItem => (
			cartItem.id === productQuantityToHandle.id ? 
			{...cartItem, quantity: cartItem.quantity - 1} :
			cartItem
		));
	}
}

const countTotal = (cartItems) => {
	// console.log(cartItems);
	return 3
}

export const CartContext = createContext ({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	handleItemQuantity: () => {},
	cartCount: 0,
	setTotalItems: () => {},
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setcartCount] = useState(0);
	const [cartTotal, setCatrTotal] = useState(0);

	const addItemToCart = (productToAdd) => {
		// setCartItems(['first'], console.log(cartItems));
		setCartItems(addCartItem(cartItems, productToAdd));
	}

	const removeItemFromCart = (productToRemove) => {
		setCartItems(removeCartItem(cartItems, productToRemove));
	}

	const handleItemQuantity = (product, action) => {
		setCartItems(handleQuantity(cartItems, product, action));
	}

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity
		, 0);
		setcartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const total = cartItems.reduce((total, cartItem) => 
			total + (cartItem.quantity * cartItem.price)
		, 0);
		setCatrTotal(total);
	}, [cartItems]);

	const value = {
		isCartOpen, 
		setIsCartOpen, 
		addItemToCart, 
		cartItems, 
		cartCount, 
		removeItemFromCart, 
		handleItemQuantity,
		cartTotal
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	)
}




