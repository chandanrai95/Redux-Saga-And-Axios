import { getPeople } from '../actions';

const INITIAL_STATE={
    hasLoadedPeople: false,
    errorLoadedPeople: false,
    list: []
}

const people = (state = INITIAL_STATE ,{ type, payload }) =>{
    switch (type){
        case getPeople.REQUEST:
            return{
                ...state,
                hasLoadedPeople:false,
                errorLoadedPeople: false,
            };
        case getPeople.FAILURE:
            return{
                ...state,
                errorLoadedPeople:true,
            };
        case getPeople.SUCCESS:
            return{
                ...state,
                hasLoadedPeople:true,
                list:payload.people,
            }
        default : return state;
    }
};

export default people;