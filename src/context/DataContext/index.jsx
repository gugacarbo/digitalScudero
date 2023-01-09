import { createContext } from "react";

const DataContext = createContext({
  cases: [],
  setCases: (cases)=>{},
  partners: [],
  setPartners: (partners)=>{},
});

export default DataContext;
