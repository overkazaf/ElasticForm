import { ajax } from 'rxjs/observable/dom/ajax';
import Rx from 'rxjs/Rx';

const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';
const FETCH_USER_CANCELLED = 'FETCH_USER_CANCELLED';

const fetchUser = id => ({ type: FETCH_USER, payload: id });
const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });
const cancelFetchUser = () => ({ type: FETCH_USER_CANCELLED });


const testEpic = action$ =>
  action$.ofType(FETCH_USER)
  .mergeMap(action => 
  	ajax.getJSON(`user/${action.payload}`)
  		.map(response => fetchUserFulfilled(response))
  		.take(3)
  		.takeUntil(action$.ofType(FETCH_USER))
  		.take(1)
  		.catch(error => Rx.Observable.of({
            type: FETCH_USER_REJECTED,
            payload: error.xhr.response,
            error: true
        }))
  )

export FETCH_USER;
export FETCH_USER_FULFILLED;
export FETCH_USER_REJECTED;
export FETCH_USER_CANCELLED;


export fetchUser;

export default testEpic;