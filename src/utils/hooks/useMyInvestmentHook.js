import { useEffect, useState } from "react";

export const useMyInvestmentHook = () => {
    const [myInvestments, setMyInvestments] = useState([]);

    useEffect(() => {
        const storedInvestorDetails = sessionStorage.getItem("myInvestments");
        if (storedInvestorDetails) {
            try {
                // Parse stored data, handle JSON parsing error if any
                const parsedInvestments = JSON.parse(storedInvestorDetails);
                setMyInvestments(parsedInvestments);
            } catch (error) {
                console.error("Error parsing stored investments:", error);
                // Handle parsing error, e.g., set default value
                setMyInvestments([]);
            }
        } else {
            // No stored data, set default value
            setMyInvestments([]);
        }
    }, []); // Add myInvestments to the dependency array if you want to react to its changes

    return myInvestments;
};
