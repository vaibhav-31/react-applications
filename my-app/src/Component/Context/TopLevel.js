import React from "react";
import CompOne from "./CompOne";

export const addressContext = React.createContext()
export const roleContext = React.createContext()

const TopLevel = () => {
    return (
        <>
         <div>Top Level</div>
         <roleContext.Provider value="developer">
         <addressContext.Provider value="delhi">
           <CompOne name="vaibhav"/>
         </addressContext.Provider>
         </roleContext.Provider>
        </>
    )
}

export default TopLevel;