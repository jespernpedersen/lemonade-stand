import {SELL_LEMONADE, BUY_LEMONS} from '../actions';

const initialState = {
    lemons: 4,
    cash: 2
}
  

export const standReducer = (state = initialState, action) => {
    switch(action.type){
        case SELL_LEMONADE:
            return{
                ...state,
                lemons: state.lemons-1,
                cash: state.cash+2
            }
        case BUY_LEMONS:
            return {
                ...state,
                lemons: state.lemons+1,
                cash: state.cash-2
            }
    }

    return state;
}