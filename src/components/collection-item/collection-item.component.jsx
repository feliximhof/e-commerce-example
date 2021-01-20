import React from "react";
import { connect } from "react-redux";
import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => (
	<div className="collection-item">
		<div
			className="image"
			style={{ backgroundImage: `url(${item.imageUrl})` }}
		/>
		<div className="collection-footer ">
			<span className="name">{item.name}</span>
			<span className="price">{item.price} €</span>
		</div>
		<CustomButton
			onClick={() => addItem(item)}
			inverted
			className="custom-button"
		>
			Add to Cart
		</CustomButton>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
