import axiosClient from '../api/axiosClient.js'
import React, { useContext, useEffect, useReducer } from 'react'
import { designsURL } from '../asset/urls.js'
import { LOADING_DESIGNS, GET_DESIGNS_ERROR, GET_DESIGNS_SUCCESS } from '../asset/action.js'
import reducer from '../reducers/designs_reducer.js'


const initialState = {
    designsLoading: true,
    designsData: {},
    designsError: false,
}

const DesignsContext = React.createContext()

export const DesignsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    async function getDesignsData(url, params) {
        try {
            dispatch({ type: LOADING_DESIGNS })
            const designs = await axiosClient.get(url, {
                params: params
            })
            dispatch({ type: GET_DESIGNS_SUCCESS, payload: designs.data.attributes })

        } catch (error) {
            dispatch({ type: GET_DESIGNS_ERROR })
            console.log(error)
        }
    }
    useEffect(() => {
        getDesignsData(designsURL, { populate: 'deep' })
    }, [])

    return (
        <DesignsContext.Provider value={{ ...state }}>
            {children}
        </DesignsContext.Provider>
    )
}

export const useDesignsContext = () => {
    return useContext(DesignsContext)
}