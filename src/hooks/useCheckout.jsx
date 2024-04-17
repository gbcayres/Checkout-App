import { useEffect, useState } from "react";

import { getCheckout } from "../data/dataHandler";

function useCheckout(date) {
    const [ checkout, setCheckout ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const getCheckoutData = async () => {
            setIsLoading(true);
            try {
                const checkoutData = await getCheckout(date);
                setCheckout(checkoutData);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        } 
        
        getCheckoutData();
    }, [date]);

    

   return { checkout, isLoading, error }
}

export default useCheckout;