import axios from "axios";
import { LoginInputs, TransactionsInputs, registerUserInputs } from "src/app/data-Types/data-types.module";

const URL_BASE= 'http://localhost:3000';
const userToken = localStorage.getItem("userToken");
const userId =localStorage.getItem("userId");

function postRegistration(body: Required<registerUserInputs>){
  const promise = axios.post(`${URL_BASE}/subscribe`,body);
  return promise;
}
function postLogin(body: Required <LoginInputs>){
const promise = axios.post(`${URL_BASE}/login`,body);
return promise;
}

function getTransactions() {
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  };
    const response = axios.get(`${URL_BASE}/funds/${userId}`, config);
    return response;
}

function postCashFlow(body: Required<TransactionsInputs>){
  const config ={
      headers:{
          Authorization : `Bearer ${userToken}`
      }
  }
  const promise = axios.post(`${URL_BASE}/funds/${userId}`,body,config);
  return promise
}

export{postRegistration, getTransactions, postLogin,postCashFlow}

