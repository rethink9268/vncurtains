import axiosClient from '../api/axiosClient.js'
import React, { useContext, useEffect, useReducer } from 'react'
import { portfolioURL } from '../asset/urls.js'
import { LOADING_PORTFOLIO, GET_PORTFOLIO_ERROR, GET_PORTFOLIO_SUCCESS } from '../asset/action.js'
import reducer from '../reducers/portfolio_reducer.js'

const initialState = {
    portfolio_loading: true,
    portfolio_error: false,
    portfolios: []
}

const PortfolioContext = React.createContext()

export const PortfolioProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getPortfolio = async () => {
        try {
            const Portfolios = await axiosClient.get(portfolioURL, {
                params: {
                    populate: 'deep'
                }
            })
            dispatch({ type: GET_PORTFOLIO_SUCCESS, payload: Portfolios.data })
        } catch (error) {
            console.log(error)
        }


    }
    useEffect(() => {
        getPortfolio()
    }, [])

    return (
        <PortfolioContext.Provider
            value={{ ...state }}
        >
            {children}
        </PortfolioContext.Provider>
    )
}

export const usePortfolioContext = () => {
    return useContext(PortfolioContext)
}