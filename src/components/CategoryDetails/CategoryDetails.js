import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Item } from 'semantic-ui-react';

const CategoryDetails = (props) => {
	let { id } = useParams();

	id = parseInt(id);

	if (props.categories.find((category) => category.id === id)) {
		const categoryLocations = props.locations.filter(
			(location) => location.category === id
		);

		if (categoryLocations.length > 0) {
			return (
				<Item.Group>
					{categoryLocations.map((location, index) => {
						return (
							<Item key={index}>
								<Item.Content>
									<Item.Header>{location.name}</Item.Header>
									<Item.Meta>{location.address}</Item.Meta>
									<Item.Description>
										{location.coordinates}
									</Item.Description>
								</Item.Content>
							</Item>
						);
					})}
				</Item.Group>
			);
		} else {
			return <div>Category is empty.</div>;
		}
	} else {
		return <div>Cateogry was not found.</div>;
	}
};

const mapStateToProps = (state) => {
	return {
		categories: state.categories,
		locations: state.locations,
	};
};

export default connect(mapStateToProps)(CategoryDetails);
