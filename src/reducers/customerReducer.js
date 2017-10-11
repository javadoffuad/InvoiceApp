const initialState = [
    {"id":43,"name":"Mark Benson","address":"353 Rochester St, Rialto FL 43250","phone":"555-534-2342","createdAt":"2017-10-11T21:20:09.521Z","updatedAt":"2017-10-11T21:20:09.521Z"},
    {"id":44,"name":"Bob Smith","address":"215 Market St, Dansville CA 94325","phone":"555-534-2342","createdAt":"2017-10-11T21:20:09.521Z","updatedAt":"2017-10-11T21:20:09.521Z"},
    {"id":45,"name":"John Draper","address":"890 Main St, Fontana IL 31450","phone":"555-534-2342","createdAt":"2017-10-11T21:20:09.521Z","updatedAt":"2017-10-11T21:20:09.521Z"}
];

export default function invoiceReducer(state = initialState, action) {
    if(action.type === 'ADD_CUSTOMER'){
        return state;
    }
    return state;
}