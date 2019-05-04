import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";


export default class AddContacts extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
				let id = this.props.match.params.id;
				return (
		
					<div className="container">
						<div>
							<h1 className="text-center mt-5">Add a new contact</h1>
							<form>
								<div className="form-group">
									<label>Full Name</label>
									<input type="text" id="nameInput" className="form-control" placeholder="Full Name" />
								</div>
								<div className="form-group">
									<label>Email</label>
									<input type="email" id="emailInput" className="form-control" placeholder="Enter email" />
								</div>
								<div className="form-group">
									<label>Phone</label>
									<input type="phone" id="phoneInput" className="form-control" placeholder="Enter phone" />
								</div>
								<div className="form-group">
									<label>Address</label>
									<input type="text" id="addressInput" className="form-control" placeholder="Enter address" />
								</div>
								<button type="button"
								onClick={() => actions.addContact(this.props,
                                document.querySelector('#nameInput').value,
                                document.querySelector('#emailInput').value,
                                document.querySelector('#phoneInput').value,
                                document.querySelector('#addressInput').value)
								}
								className="btn btn-primary form-control">save</button>
								<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
							</form>
						</div>
					</div>
			);
				}}
			</Context.Consumer>
		);
	}
}

AddContacts.propTypes ={
	match: PropTypes.object,
	history: PropTypes.object
};