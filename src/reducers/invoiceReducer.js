const initialState = [
    {"id":43,"name":"Mark Benson","address":"353 Rochester St, Rialto FL 43250","phone":"555-534-2342"},
    {"id":44,"name":"Bob Smith","address":"215 Market St, Dansville CA 94325","phone":"555-534-2342"},
    {"id":45,"name":"John Draper","address":"890 Main St, Fontana IL 31450","phone":"555-534-2342"}
];

export default function invoiceReducer(state = initialState, action) {
    if(action.type === 'ADD_INVOICE'){
        return state;
    }
    return state;
}