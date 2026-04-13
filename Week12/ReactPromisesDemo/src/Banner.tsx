import React, { useState } from "react";
import { useNavigate } from "react-router";

const Banner = () => {
	const [pageIndex, setPageIndex] = useState(0);
	const navigate = useNavigate();

	const pages = ["/", "/cat-picture", "/dog-picture"];

	const handleClick = () => {
		setPageIndex((index) => {
			const newIndex = (index + 1) % pages.length;
			navigate(pages[newIndex]);
			return newIndex;
		});
	};

	return (
		<>
			<h1 role="button" className="display-3 text-warning text-center" onClick={handleClick}>Welcome to Our New Demo... I Promise</h1>
		</>
	);
}

export default Banner;