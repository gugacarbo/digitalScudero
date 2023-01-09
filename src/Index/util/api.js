//how to create a axios object with default url?
import axios from "axios";

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

const getCases = () => api.get("/get/cases.php");


const getPartners = () => api.get("/get/partners");


const getAvaliations = () =>
  Mock({
    status: 200,
    data: {}, //api.get("/get/avaliations.php"),
  });

export {
  registerVisitor,
  getCases,
  getPartners,
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
