import _ from "lodash";
import { READ_EVENTS } from "../actions";

export default (state = {}, action) => {
	switch (action.type) {
		case READ_EVENTS:
			// console.log(action.response.data) // list
			return _.mapKeys(action.response.data, "id"); // object
		// return state;
		default:
			return state;
	}
};
