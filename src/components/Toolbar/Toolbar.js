import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { deleteCategory } from '../../app/actions';

const Toolbar = () => {
	const mode = useSelector((state) => state.mode);
	const id = useSelector((state) => state.selected);

	const dispatch = useDispatch();

	const disabled = mode !== 'select' ? 'disabled' : null;
	const to = '/view/' + id;

	return (
		<div>
			<Button as={Link} to="/edit" className={disabled}>
				Edit
			</Button>
			<Button as={Link} to={to} className={disabled}>
				View Details
			</Button>
			<Button
				className={disabled}
				onClick={() => dispatch(deleteCategory())}
			>
				Delete
			</Button>
		</div>
	);
};

export default Toolbar;
