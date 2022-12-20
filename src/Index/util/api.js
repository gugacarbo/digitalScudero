function api() {}
export default api;

const delay = 1;
import { casesArray, PartnersArray, AvaliationsArray } from "./api_data";

const registerNewsletter = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200 });
    }, delay);
  });

const sendContact = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200 });
      resolve({ status: 300 });
      reject(new Error("ERO"));
    }, delay);
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
  getCases,
  getCase,
  getPartners,
  getPartner,
  getAvaliations,
  registerNewsletter,
  sendContact,
};

const Mock = (res) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res);
    }, delay);
  });
