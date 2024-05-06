import { createContext, useContext, useState } from 'react'

export const CheckoutContext = createContext(null)

export const CheckoutProvider = ({ children }) => {
    const [currentCheckout, setCurrentCheckout] = useState(null)
    const [currentCheckoutDate, setCurrentCheckoutDate] = useState('')

    return (
        <CheckoutContext.Provider
            value={{
                currentCheckoutDate,
                setCurrentCheckoutDate,
                currentCheckout,
                setCurrentCheckout,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}

export function useCheckoutContext() {
    const context = useContext(CheckoutContext)
    if (!context) {
        throw new Error(
            `useCheckoutContext should be used within a CheckoutContextProvider`
        )
    }
    return context
}
