import React from "react";

const CenterImage = ({ src }) => {
	return (
		<div className="center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<img src={src} />
		</div>
	);
};

export default CenterImage;
