import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class SinglePlanPage extends React.Component {
	constructor() {
		super();

		this.state = {
			username: "",
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			confirm_password: "",
			state: "",
			address: "",
			city: "",
			zipcode: "",
			state: ""
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					//	store.products &&
					//		store.products.map((item, index) => {

					return (
						<div className="container mt-5 ">
							<div className="row ">
								<div className="col-6 mx-auto">
									<div className="card mt-5">
										<h2 className="text-center">
											{/*{item.plan_name}*/}
											name
										</h2>
										<img
											src="http://lorempixel.com/output/sports-q-c-640-480-3.jpg"
											className="card-img-top"
											alt="..."
											height="350px"
										/>
										<div className="card-body">
											<h5 className="card-title">
												Card title
												{/*{item.plan_name}*/}
											</h5>
											<p className="card-text">
												Some quick example text to build on the card title and make up the bulk
												of the cards content.
												{/*{item.description}*/}
											</p>
											<a href="#" className="btn btn-primary btn-lg">
												{/*{item.price}*/}
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
					//});
				}}
			</Context.Consumer>
		);
	}
}
SinglePlanPage.propTypes = {
	history: PropTypes.object
};
