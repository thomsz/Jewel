import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Message } from 'semantic-ui-react';
import { updateCategory } from '../../app/actions';

const EditCategory = (props) => {
	const category = props.categories.find(
		(category) => category.id === props.selected
	);

	let initialInput = category ? category.name : null;

	const [{ input }, setInput] = useState({ input: initialInput });
	const [{ showSuccessMessage, message }, setShowSuccessMessage] = useState({
		showSuccessMessage: false,
		message: '',
	});

	const onChangeHandler = (event) => {
		setInput({ input: event.target.value });
	};

	const submitHandler = ({ key }) => {
		if (key === 'Enter') {
			props.updateCategory(input);
			setShowSuccessMessage({
				showSuccessMessage: true,
				message: input + ' was successfuly updated.',
			});

			setTimeout(() => {
				setShowSuccessMessage({ showSuccessMessage: false });
			}, 2000);
		}
	};

	if (category) {
		return (
			<div>
				<h3>Edit {category.name}</h3>
				<Input
					fluid
					size="huge"
					onChange={onChangeHandler}
					onKeyDown={submitHandler}
					value={input}
				/>
				{showSuccessMessage ? (
					<Message success header={message}></Message>
				) : null}
			</div>
		);
	} else {
		return <div>No category selected</div>;
	}
};

const mapStateToProps = (state) => {
	return {
		selected: state.selected,
		categories: state.categories,
		locations: state.locations,
	};
};

const mapDispatchToProps = {
	updateCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);
