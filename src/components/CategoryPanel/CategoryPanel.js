import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectCategory } from '../../app/actions';

const CategoryPanel = (props) => {
	const selectCategoryHandler = (name, id, index) => {
		document.getElementById('cat_' + index).focus();
		props.selectCategory(name, id);
	};

	const selectedHandler = (id) =>
		props.selected !== null && props.selected === id;

	return (
		<div>
			<Menu secondary fluid vertical size="massive">
				{props.categories.map(({ name, id }, index) => {
					return (
						<Menu.Item
							key={index}
							id={'cat_' + index}
							name={name}
							active={selectedHandler(id)}
							onClick={() =>
								selectCategoryHandler(name, id, index)
							}
						>
							{name}
						</Menu.Item>
					);
				})}
			</Menu>
		</div>
	);
};

const mapStateToProps = ({ selected, categories }) => ({
	selected,
	categories,
});

const mapDispatchToProps = {
	selectCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPanel);
