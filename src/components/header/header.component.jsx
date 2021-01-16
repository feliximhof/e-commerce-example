import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, cartHidden }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				HOME
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{cartHidden && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
	cartHidden: state.cart.hidden,
});

export default connect(mapStateToProps, null)(Header);
