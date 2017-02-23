
const TICK = () => dispatch => {
  return () => dispatch({ 
  	type: 'TICK',
  	payload: 2,
  });
}

export {
	TICK,
};