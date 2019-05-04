import PropTypes from "prop-types";

const getState = ( scope ) => {
	return{
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			addContact: (props, name, email, address, phone) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: 'POST',
					headers: {
						"Content-type": "application/json;"
					},
					body: JSON.stringify({
						"full_name": name,
						"email": email,
						"agenda_slug": "downtown_viii",
						"address": address,
						"phone": phone
					})
				})
				.then(getDataUpdate => {
					let store = scope.state.store;
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
					.then(response => response.json())
					.then(data => {
						store.contacts = data;
						scope.setState({ store });
					});
				});
				props.history.push("/");
			},
			
			deleteContact: (id) => {
				let store = scope.state.store;
				let apiId = store.contacts[id].id;
				fetch("https://assets.breatheco.de/apis/fake/contact/" + apiId , {
					method: 'DELETE'
				})
				.then(getDataUpdated => {
					let store = scope.state.store;
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
					.then(response => response.json())
					.then(data => {
						store.contacts = data;
						scope.setState({ store });
					});
				});
			},
			
			editContact: (name, email, phone, address, id) => {
				let store = scope.state.store;
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id ,{
					method: 'PUT',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						"full_name" : name,
						"email": email,
						"phone": phone,
						"address": address,
						"agenda_slug": "downtown_viii"
					})
				})
				
				.then(getDataUpdated => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/downtown_viii")
					.then(response => response.json())
					.then(data => {
						store.contacts = data;
						scope.setState({ store });
					});
				});
			}
			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
            
		}
	};
};

getState.propTypes = {
	history: PropTypes.object
};

export default getState;


