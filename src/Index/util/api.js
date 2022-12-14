function api() {}
export default api;

import axios from "axios";

const delay = 1500;
import { casesArray, PartnersArray } from "./api_data";
const registerNewsletter = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      axios.get(
        "http://15.229.71.123:3333/notification?notification=" +
          "Uma Pessoa se Registrou na Newsletter!"
      );
      resolve({ status: 200 });
      resolve({ status: 300 });
    }, delay);
  });

const sendContact = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200 });
      axios.get(
        "http://15.229.71.123:3333/notification?notification=" +
          "Uma Mensagem de Contato foi enviada pelo site!"
      );
      //resolve({ status: 300 });
      //reject(new Error("ERO"));
    }, delay);
  });

const getCases = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200, data: casesArray });
    }, delay);
  });

const getCase = (caseName) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const caseItem = casesArray.find((item) => {
        return item.to == caseName;
      });
      resolve({
        status: 200,
        data: caseItem,
      });
    }, delay);
  });

const getPartners = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: PartnersArray,
      });
    }, delay);
  });

const getPartner = (partnerName) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const partnerItem = PartnersArray.find((item) => {
        return item.to == partnerName;
      });
      resolve({
        status: 200,
        data: partnerItem,
      });
    }, delay);
  });

export {
  getCases,
  getCase,
  getPartners,
  getPartner,
  registerNewsletter,
  sendContact,
};
