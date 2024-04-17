import { createContext, useState } from "react";

export const CheckoutContext = createContext();


export const CheckoutProvider = ({children}) => {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [openCheckoutDate, setOpenCheckoutDate] = useState('');
    
    return(
        <CheckoutContext.Provider 
            value={{openCheckoutDate, setOpenCheckoutDate, isCheckoutOpen, setIsCheckoutOpen}}
        >
            {children}
        </CheckoutContext.Provider>
    );
}