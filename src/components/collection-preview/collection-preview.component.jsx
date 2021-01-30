import React from "react";
import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
	<>
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="collection-preview">
			<div className="preview">
				{items
					.filter((item, i) => i < 20)
					.map((item) => (
						<CollectionItem
							className="collection-item"
							key={item.id}
							item={item}
						/>
					))}
			</div>
		</div>
	</>
);

export default CollectionPreview;
