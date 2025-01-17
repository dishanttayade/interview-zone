import { func } from "prop-types";
import React, { useContext } from "react";
import { useState } from "react";
import {  createContext} from "react";
export const AppContext = createContext(); 
export const AppContextUpdate  = createContext(); 
export const AppLogout = createContext(); 
export function AppContextProvider({children}){
    const [data , setData] =  useState(); 
    function updateData(data) {
        setData(data) ; 
    }

    function logout() {
        localStorage.removeItem("jwt") ; 
        localStorage.removeItem("appContextdata")
        return "loggedout"
    }

return (
       <AppContext.Provider value={data}>
           <AppContextUpdate.Provider value={updateData}>
             {/* <AppLogout value ={logout}> */}
             {children}
          
             {/* </AppLogout> */}
               </AppContextUpdate.Provider>
       </AppContext.Provider>
)
} 


