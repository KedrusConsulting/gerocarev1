import React, { createContext, useEffect, useState } from "react";
// import data from "../../states.json";
import axios from "axios";

// console.log(data);

export const StatesContext = createContext({});

const StatesProvider = ({ children }) => {
  const [nationalityOptions, setNationlityOptions] = useState([
    { value: "Nigeria" },
  ]);

  const [stateOptions, setStateOptions] = useState([
    { value: "State of Origin" },
  ]);

  const [lgasOptions, setLgasOptions] = useState([{ value: "L.G.A" }]);
  const [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data: res } = await axios.get(
        "https://api.jsonbank.io/f/trapcodeio/countries/nigeria/states.json"
      );

      // console.log(res);

      const states = res.map((state) => {
        return { value: state.name };
      });

      setStateOptions([{ value: "State of Origin" }, ...states]);

      if (selectedState) {
        const state = res.find(({ name, lgas }) => selectedState === name);
        const options = state?.lgas?.map((lga) => {
          return { value: lga };
        });

        {
          options && setLgasOptions([{ value: "L.G.A" }, ...options]);
        }
      }
    };

    getData();
  }, [selectedState]);

  const setCurrentState = (value) => {
    setSelectedState(value);
  };

  return (
    <StatesContext.Provider
      value={{
        nationalityOptions,
        stateOptions,
        lgasOptions,
        selectedState,
        setCurrentState,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export default StatesProvider;
