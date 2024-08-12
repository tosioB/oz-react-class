import { createContext, useContext } from "react";
import data from "../../assets/create_screen_data/04-카페_키오스크_만들기";

const menuContext =  createContext();

export function MenuProvider({ children }) {
  return (
    <menuContext.Provider value={{menu: data.menu}}>
      {children}
    </menuContext.Provider>
  )
}

// useContext(menuContext) => {menu: data.menu}
export function useMenu() {
  return useContext(menuContext)
}