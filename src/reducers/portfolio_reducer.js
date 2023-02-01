import { LOADING_PORTFOLIO, GET_PORTFOLIO_ERROR, GET_PORTFOLIO_SUCCESS } from '../asset/action.js'

const portfolio_reducer = (state, action) => {
    if (action.type === LOADING_PORTFOLIO) {
        return ({ ...state, portfolio_loading: true })
    } if (action.type === GET_PORTFOLIO_SUCCESS) {
        return ({ ...state, portfolio_loading: false, portfolios: action.payload })
    }
    if (action.type === GET_PORTFOLIO_ERROR) {
        return ({ ...state, portfolio_error: true })
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}
export default portfolio_reducer