import { useEffect, useState } from "react";
import { getAllCheckouts } from "../utils/dataHandler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useCheckouts = () => {
    const [checkouts, setCheckouts] = useState(null);

    useEffect(() => {
        const fetchCheckouts = async () => {
            try {
                const checkouts = await getAllCheckouts();
                setCheckouts(checkouts);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCheckouts();
    }, []);

    const cleanCheckouts = () => {
        AsyncStorage.clear();
        setCheckouts(null);
    };

    return { checkouts, cleanCheckouts };
};

export default useCheckouts;
