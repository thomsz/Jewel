import * as types from './constants';

const initialState = {
	mode: 'default',
	context: 'list',
	contextTitle: 'Categories',
	selected: null,
	categoriesRunningID: 2,
	categories: [
		{ name: 'Wishlist', id: 1 },
		{ name: 'Cities I like', id: 2 },
		{ name: 'Things to do tomorrow', id: 3 },
	],
	locations: [
		{
			name: 'Berlin',
			address: 'Berlin, Germany',
			coordinates: '0000000 000000',
			category: 2,
		},
		{
			name: 'Dublin',
			address: 'Dublin',
			coordinates: '000 000',
			category: 2,
		},
		{
			name: 'Helsinki',
			address: 'Helsinki',
			coordinates: '000 000',
			category: 1,
		},
		{
			name: 'Go shopping',
			address: 'At the mall',
			coordinates: '000 001',
			category: 3,
		},
		{
			name: 'Call Grandma',
			address: 'Phone',
			coordinates: '000 000',
			category: 3,
		},
	],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_CATEGORY:
			return {
				...state,
				categories: state.categories.map((category, index) => {
					if (
						index !==
						state.categories.findIndex(
							(category) => category.id === state.selected
						)
					) {
						return category;
					}

					return {
						...category,
						name: action.payload,
					};
				}),
			};

		case types.DELETE_CATEGORY:
			const index = state.categories.findIndex(
				(category) => category.id === state.selected
			);

			return {
				...state,
				categories: [
					...state.categories.slice(0, index),
					...state.categories.slice(index + 1),
				],
				selected: initialState.selected,
				contextTitle: initialState.contextTitle,
				mode: initialState.mode,
			};

		case types.ADD_CATEGORY:
			return {
				...state,
				categories: [
					{ name: action.payload, id: state.categoriesRunningID + 1 },
					...state.categories,
				],
				categoriesRunningID: state.categoriesRunningID + 1,
			};

		case types.SET_TITLE:
			return {
				...state,
				contextTitle: action.payload,
			};

		case types.SET_DEFAULT_MODE:
			return {
				...state,
				mode: 'default',
			};

		case types.SELECT_CATEGORY:
			return {
				...state,
				selected: action.payload.id,
				contextTitle: action.payload.category,
				mode: 'select',
			};

		default:
			return state;
	}
};

export default reducer;
