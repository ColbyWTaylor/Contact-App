import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";


export default class EditContacts extends React.Component {
	render() {
		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Edit contact</h1>
					<Context.Consumer>
						{({store, actions}) => {
					let id = this.props.match.params.id;
					let apiId = store.contacts[id].id;
						return (
							<form>
								<div className="form-group">
									<label>Full Name</label>
									<input type="text" id="nameInput" className="form-control" placeholder="Full Name" 
									defaultValue={store.contacts[id].full_name}/>
								</div>
								<div className="form-group">
									<label>Email</label>
									<input type="email" id="emailInput" className="form-control" placeholder="Enter email" 
									defaultValue={store.contacts[id].email}/>
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input type="phone" id="phoneInput" className="form-control" placeholder="Enter phone" 
									defaultValue={store.contacts[id].phone}/>
								</div>
								<div className="form-group">
									<label>Address</label>
									<input type="text" id="addressInput" className="form-control" placeholder="Enter address" 
									defaultValue={store.contacts[id].address}/>
								</div>
								<button type="button"
								onClick={() => actions.editContact(
								document.querySelector('#nameInput').value,
								document.querySelector('#emailInput').value,
								document.querySelector('#phoneInput').value,
								document.querySelector('#addressInput').value, apiId, this.props.history.push("/"))
								}
								className="btn btn-primary form-control">save</button>
								<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
							</form>
					);
					}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

EditContacts.propTypes = {
match: PropTypes.object,
history: PropTypes.object
};