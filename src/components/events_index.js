import React, { Component } from "react";
import { connect } from "react-redux";
import { readEvents } from "../actions";
import _ from "lodash";
import { Link } from "react-router-dom" 
class EventsIndex extends Component {
	componentDidMount() {
		// console.log("componentDidMount")
		this.props.readEvents();
	}

	renderEvents() {
		console.log(this.props.events);
		return _.map(this.props.events, (event) => (
			<tr key={event.id}>
				<td>{event.id}</td>
				<td>{event.title}</td>
				<td>{event.body}</td>
				<td>{event.created_at}</td>
			</tr>
		));
	} 

	render() {
		console.log("render");
		return (
			<React.Fragment>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Body</th>
							<th>created at</th>
						</tr>
					</thead>
					<tbody>{this.renderEvents()}</tbody>
				</table>
				<Link to="/events/new">New Events</Link>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({ events: state.events });

const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
