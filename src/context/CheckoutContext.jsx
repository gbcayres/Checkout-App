import { createContext, useState } from "react";

export const CheckoutContext = createContext();


export const CheckoutProvider = ({children}) => {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [checkoutDate, setCheckoutDate] = useState('');
    
    return(
        <CheckoutContext.Provider 
            value={{checkoutDate, setCheckoutDate, isCheckoutOpen, setIsCheckoutOpen}}
        >
            {children}
        </CheckoutContext.Provider>
    );
}