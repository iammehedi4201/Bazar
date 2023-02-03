import React, { createContext, useState } from 'react';
export const InputContext =createContext();

const SearchInputContext = ({children}) => {

    const [inputValue, setInputValue] = useState("");

    const catchValue = (e) => {
        e.preventDefault();
        const value = document.getElementById("input-field").value;
        setInputValue(value);
      };

    const containerOfValue = {catchValue,inputValue}

    return (
        <InputContext.Provider value={containerOfValue}>
           {
             children
           }
        </InputContext.Provider>
    );
};

export default SearchInputContext;