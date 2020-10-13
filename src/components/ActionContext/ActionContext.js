import React from 'react';
import { connect } from 'react-redux';

const ActionContext = (props) => {
	return (
		<div>
			<h2>{props.contextTitle}</h2>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		contextTitle: state.contextTitle,
	};
};

export default connect(mapStateToProps)(ActionContext);
