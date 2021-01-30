import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51IFKVBKFTpDaYwdagpoIJoH3QZEEjW8x156ifk0wKCAnLpWwRv3HI6ZVJGdUzfxLInYIO3WBzd6r6g4VfRonvKwB00tkfCsB7t";

	const onToken = (token) => {
		console.log(token);
		alert("Payment successful");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="E-Commerce Example"
			billingAddress
			shippingAddress
			description={`Your total is: ${price} €`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
