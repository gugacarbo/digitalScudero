//how to create a axios object with default url?
import axios from "axios";
import { casesArray, PartnersArray, AvaliationsArray } from "./api_data";

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

const registerVisitor = () => api.get("/visitor.php");

const registerNewsletter = (data) =>
  api.post("/registerNewsletter.php", {
    ...data,
  });

const sendContact = (data) =>
  api.post("/sendContact.php", {
    ...data,
  });

const getCases = () =>
  Mock({
    status: 200,
    data: casesArray,
  });

const getCase = (caseName) =>
  Mock({
    status: 200,
    data:
      casesArray.find((item) => {
        return item.to == caseName;
      }) ?? null,
  });

const getPartners = () =>
  Mock({
    status: 200,
    data: PartnersArray,
  });

const getPartner = (partnerName) =>
  Mock({
    status: 200,
    data:
      PartnersArray.find((item) => {
        return item.to == partnerName;
      }) ?? null,
  });

const getAvaliations = () =>
  Mock({
    status: 200,
    data: AvaliationsArray,
  });

export {
  registerVisitor,
  getCases,
  getCase,
  getPartners,
  getPartner,
  getAvaliations,
  registerNewsletter,
  sendContact,
};

const delay = 1;

const Mock = (res) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res);
    }, delay);
  });
