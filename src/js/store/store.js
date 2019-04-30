const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			addContact:() => {
				const store = getStore();
				alert("addContact");
				setStore({ store: store });
			}
			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
            
		}
	};
};

export default getState;


