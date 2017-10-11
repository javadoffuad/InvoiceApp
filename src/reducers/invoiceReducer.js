const initialState = [
    {"id":43,"name":"Mark Benson","discount":"20%","total":"125$"},
    {"id":44,"name":"Bob Smith","discount":"15%","total":"315$"},
    {"id":45,"name":"John Draper","discount":"18%","total":"200$"}
];

export default function invoiceReducer(state = initialState, action) {
    if(action.type === 'ADD_INVOICE'){
        return state;
    }
    return state;
}