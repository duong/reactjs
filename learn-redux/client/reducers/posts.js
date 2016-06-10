// a reducer takes in two things:



// 1. the action (info about what happened)
// 2. copy of current state



function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES':
	      const i = action.index;
	      console.log('statexxxxxxxxx', state);
	      console.log('a', ...state.slice(0,i));
	      console.log('b', {...state[i], likes: state[i].likes + 1});
	      console.log('c', ...state.slice(i+1));
	      return [
	        ...state.slice(0,i), // before the one we are updating
	        {...state[i], likes: state[i].likes + 2},
	        ...state.slice(i + 1), // after the one we are updating
	      ]
		default:
			return state;
	}
	return state;
}
export default posts;