import * as actions from './constants';

export const selectCategory = (category, id) => {
	return {
		type: actions.SELECT_CATEGORY,
		payload: { category, id },
	};
};

export const setDefaultMode = () => {
	return {
		type: actions.SET_DEFAULT_MODE,
	};
};

export const setTitle = (title) => {
	return {
		type: actions.SET_TITLE,
		payload: title,
	};
};

export const addCategory = (name) => {
	return {
		type: actions.ADD_CATEGORY,
		payload: name,
	};
};

export const deleteCategory = () => {
	return {
		type: actions.DELETE_CATEGORY,
	};
};

export const updateCategory = (title) => {
	return {
		type: actions.UPDATE_CATEGORY,
		payload: title,
	};
};
