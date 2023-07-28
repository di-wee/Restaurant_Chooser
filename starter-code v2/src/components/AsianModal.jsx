import React from 'react';
import ReactDOM from 'react-dom';
const OverLay = (props) => {};
const AsianModal = (props) => {
	return (
		<div>
			{ReactDOM.createPortal(
				<OverLay></OverLay>,
				document.querySelector('#modal-root')
			)}
		</div>
	);
};

export default AsianModal;
