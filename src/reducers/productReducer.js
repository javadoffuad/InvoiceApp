const initialState = [
    {"id":71,"name":"Parachute Pants","price":29.99,"createdAt":"2017-10-11T21:20:09.521Z","updatedAt":"2017-10-11T21:20:09.521Z"},
    {"id":72,"name":"Phone Holder","price":9.99,"createdAt":"2017-10-11T21:20:09.521Z","updatedAt":"2017-10-11T21:20:09.521Z"},
    {"id":73,"name":"Pet Rock","price":5.99,"createdAt":"2017-10-11T21:20:09.521Z","updatedAt":"2017-10-11T21:20:09.521Z"},
    {"id":74,"name":"Egg Timer","price":15.99,"createdAt":"2017-10-11T21:20:09.521Z","updatedAt":"2017-10-11T21:20:09.521Z"},
    {"id":75,"name":"Neon Green Hat","price":21.99,"createdAt":"2017-10-11T21:20:09.521Z","updatedAt":"2017-10-11T21:20:09.521Z"}
];

export default function productReducer(state = initialState, action) {
    if(action.type === 'ADD_PRODUCT'){
        return state;
    }
    return state;
}