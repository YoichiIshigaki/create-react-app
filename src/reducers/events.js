import _ from "lodash";
import { CREATE_EVENTS,READ_EVENTS, READ_EVENT,UPDATE_EVENTS, DELETE_EVENT } from "../actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (events = {}, action) => {
	switch (action.type) {
		case CREATE_EVENTS:
		case READ_EVENT:
		case UPDATE_EVENTS:
			const data = action.response.data;
			// console.log(action.response.data)
			// {id: 1, token: 'token123', title: "Let's have an event 1!", body: 'This is the body for event 1.', created_at: '2021-10-30T13:02:05.434Z',body: "This is the body for event 1.",created_at: "2021-10-30T13:02:05.434Z",id: 1,title: "Let's have an event 1!",token: "token123",updated_at: "2021-10-30T13:02:05.434Z"
			// console.log(events)
			// console.log({ ...events, [data.id]: data });
			return { ...events, [data.id]: data };
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
