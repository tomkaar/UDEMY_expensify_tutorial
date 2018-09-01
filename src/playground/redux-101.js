import { createStore } from "redux";



const incrementCount = ( { incrementBy = 1 } = {} ) =>({
    type: "INCREMENT",
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy: decrementBy
});

const resetCount = () => ({
    type: "RESET"
});

const setCount = ({ count } = {}) => ({
    type: "SET_COUNT",
    count: count
});


const CountReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.incrementBy }
        case "DECREMENT":
            return { count: state.count - action.decrementBy }
        case "RESET":
            return { count: 0 }
        case "SET_COUNT":
            return { count: action.count }
        default:
            return state;
    }
}

const store = createStore(CountReducer);



const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({ count: 101 }));