import { createRef, useEffect, useRef, useState } from "react";
import LoadingContext from "./index";

export default ({ children }) => {
  const [loading, setLoading] = useState(0);

  function handleSet(val) {
    val ? setLoading(1) : setLoading(0);
  }
  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading: handleSet,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
