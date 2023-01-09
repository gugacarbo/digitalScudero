import { createRef, useEffect, useRef, useState } from "react";
import { getCases, getPartners } from "../../Index/util/api";
import DataContext from "./index";

export default ({ children }) => {
  const [cases, setCases] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getCases()
      .then(({ data, ...props }) => {
        if (data.status == 200) {
          setCases(data.data);
        } else {
          alert("ERRO");
        }
      })
      .catch((e) => {
        alert("ERRO");
      });

    getPartners()
      .then(({ data, ...props }) => {
        if (data.status == 200) {
          setPartners(data.data);
        } else {
          alert("ERRO");
        }
      })
      .catch((e) => {
        alert("ERRO");
      });
  }, []);

  const getCase = (caseName) =>
    cases.find((item) => {
      return item.to == caseName;
    });

  const getPartner = (partnerName) =>
    partners.find((item) => {
      return item.to == partnerName;
    });

  return (
    <DataContext.Provider
      value={{
        cases,
        getCase,
        setCases,
        partners,
        getPartner,
        setPartners,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
