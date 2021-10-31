import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { getEvent, deleteEvent, putEvent } from "../actions";


class EventsShow extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
		console.log("events show");
	}
	renderField(field) {
		const {
			input,
			label,
			type,
			meta: { touched, error },
		} = field;
		console.log("input");
		console.log(input);
		// console.log(field)
		return (
			<div>
				<input {...input} placeholder={label} type={type} />
				{touched && error && <span>{error}</span>}
			</div>
		);
	}
	async onSubmit(values) {
		await this.props.putEvent(values);
		this.props.history.push("/");
	}

	async onDeleteClick() {
		// console.log(this.props.match)
		const { id } = this.props.match.params;
		// console.log(id)
		await this.props.deleteEvent(id);
		this.props.history.push("/");
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		if (id) this.props.getEvent(id);
	}

	render() {
		const { handleSubmit, pristine, submitting, invalid } = this.props;
		return (
			<React.Fragment>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<div>
						<Field
							label="Title"
							name="title"
							type="text"
							component={this.renderField}
						/>
					</div>
					<div>
						<Field
							label="Body"
							name="body"
							type="text"
							component={this.renderField}
						/>
					</div>
					<div>
						<input
							type="submit"
							value="Submit"
							disabled={pristine || submitting || invalid}
						/>
					</div>
					<Link to="/">Cancel</Link>
					<Link to="/" onClick={this.onDeleteClick}>
						Delete
					</Link>
				</form>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	const event = state.events[ownProps.match.params.id];
	return { initialValues: event, event };
};
const mapDispatchToProps = { getEvent, deleteEvent, putEvent };

const validate = (values) => {
	const errors = {};

	if (!values.title) errors.title = "Enter a title, please";
	if (!values.body) errors.body = "Enter a body, please";

	return errors;
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(
	reduxForm({ validate, form: "eventShowForm", enableReinitialize: true })(
		EventsShow
	)
);
