function api() {}
export default api;

import axios from "axios";
const apiUrl = "https://scuderobot.tk";
const delay = 500;
import { casesArray, PartnersArray } from "./api_data";

const registerNewsletter = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sending Newsletter Notification");

      axios.post(
        apiUrl + "/notification",
        {
          notification: "Uma Pessoa se Registrou na Newsletter!",
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      resolve({ status: 200 });
      resolve({ status: 300 });
    }, delay);
  });

const sendContact = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200 });
      console.log("sending Contact Notification");

      axios.post(
        apiUrl + "/notification",
        {
          notification: "Uma Mensagem de Contato foi enviada pelo site!",
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      //resolve({ status: 300 });
      //reject(new Error("ERO"));
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

export {
  getCases,
  getCase,
  getPartners,
  getPartner,
  registerNewsletter,
  sendContact,
};

const Mock = (res) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res);
    }, delay);
  });
