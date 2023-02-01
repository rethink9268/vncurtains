import { LOADING_DESIGNS, GET_DESIGNS_ERROR, GET_DESIGNS_SUCCESS } from '../asset/action.js'

const designs_reducer = (state, action) => {
    if (action.type === LOADING_DESIGNS) {
        return ({ ...state, designsLoading: true })
    }
    if (action.type === GET_DESIGNS_SUCCESS) {
        return ({ ...state, designsData: action.payload, designsLoading: false })
    }
    if (action.type === GET_DESIGNS_ERROR) {
        return ({ ...state, designsError: true, designsLoading: false })
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default designs_reducer