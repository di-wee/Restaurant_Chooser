import React from 'react';
import ReactDOM from 'react-dom';
const OverLay = (props) => {};
const WesternModal = (props) => {
	return (
		<div>
			{ReactDOM.createPortal(
				<OverLay></OverLay>,
				document.querySelector('#modal-root')
			)}
		</div>
	);
};

export default WesternModal;
