import _ from "lodash";
import { READ_EVENTS, DELETE_EVENT } from "../actions";

export default (events = {}, action) => {
	switch (action.type) {
		case READ_EVENTS:
			return _.mapKeys(action.response.data, "id"); // object
		case DELETE_EVENT:
			// console.log(action.id);
			// console.log(events);
			delete events[action.id];
			return { ...events };

		default:
			return events;
	}
};
