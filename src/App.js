import React from 'react';
import './App.css';
import { Container, Segment, Menu } from 'semantic-ui-react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setDefaultMode, setTitle } from './app/actions';
import Toolbar from './components/Toolbar/Toolbar';
import CategoryPanel from './components/CategoryPanel/CategoryPanel';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import ActionContext from './components/ActionContext/ActionContext';
import NewCategoryForm from './components/NewCategoryForm/NewCategoryForm';
import EditCategory from './components/EditCategory/EditCategory';

function App(props) {
	const setTitleHandler = (title) => {
		props.setTitle(title);
	};

	return (
		<Router>
			<Container text>
				<div>
					<nav onClick={() => props.setDefaultMode()}>
						<Menu secondary>
							<Menu.Item
								name="list"
								onClick={() =>
									setTitleHandler('List Categories')
								}
								as={Link}
								to="/list"
							>
								List Categories
							</Menu.Item>
							<Menu.Item
								name="list"
								onClick={() => setTitleHandler('New Category')}
								as={Link}
								to="/new"
							>
								New Category
							</Menu.Item>
						</Menu>
					</nav>
					<Segment basic>
						<ActionContext />
					</Segment>
					<Segment color="blue">
						<Toolbar />
					</Segment>
				</div>
				<Segment basic>
					<Switch>
						<Route path="/list">
							<CategoryPanel />
						</Route>
						<Route path="/new">
							<NewCategoryForm />
						</Route>
						<Route path="/view/:id">
							<CategoryDetails />
						</Route>
						<Route path="/edit">
							<EditCategory />
						</Route>
					</Switch>
				</Segment>
			</Container>
		</Router>
	);
}

const mapDispatchToProps = {
	setDefaultMode,
	setTitle,
};

export default connect(undefined, mapDispatchToProps)(App);
