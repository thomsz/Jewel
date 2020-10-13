import React, { useState } from 'react';
import { Input, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addCategory } from '../../app/actions';

const NewCategoryForm = (props) => {
	const [{ input }, setInput] = useState({ input: '' });
	const [{ showSuccessMessage, message }, setShowSuccessMessage] = useState({
		showSuccessMessage: false,
		message: '',
	});

	const onChangeHandler = (event) => {
		setInput({ input: event.target.value });
	};

	const submitHandler = ({ key }) => {
		if (key === 'Enter') {
			props.addCategory(input);
			setInput({ input: '' });
			setShowSuccessMessage({
				showSuccessMessage: true,
				message: input + ' was successfuly added.',
			});

			setTimeout(() => {
				setShowSuccessMessage({ showSuccessMessage: false });
			}, 2000);
		}
	};

	return (
		<div>
			<Input
				onChange={onChangeHandler}
				onKeyDown={submitHandler}
				placeholder="New Category..."
				value={input}
				size="large"
				fluid
			/>
			{showSuccessMessage ? (
				<Message success header={message}></Message>
			) : null}
		</div>
	);
};

const mapDispatchToProps = {
	addCategory,
};

export default connect(undefined, mapDispatchToProps)(NewCategoryForm);
