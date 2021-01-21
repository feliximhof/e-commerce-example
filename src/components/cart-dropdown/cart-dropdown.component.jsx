import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, toggleCart }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length === 0 ? (
				<span className="empty-message">Add Items To Your Cart</span>
			) : (
				cartItems.map((item) => <CartItem item={item} />)
			)}
		</div>

		<CustomButton
			inverted
			onClick={() => {
				history.push("/checkout");
				toggleCart();
			}}
		>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
	toggleCart: () => dispatch(toggleCartHidden()),
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
