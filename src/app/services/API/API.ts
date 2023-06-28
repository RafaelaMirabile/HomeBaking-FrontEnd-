import axios from "axios";
import { LoginInputs, registerUserInputs } from "src/app/data-Types/data-types.module";

const URL_BASE= 'http://localhost:3000';


function postRegistration(body: Required<registerUserInputs>){
  const promise = axios.post(`${URL_BASE}/subscribe`,body);
  return promise;
}
function postLogin(body: Required <LoginInputs>){
const promise = axios.post(`${URL_BASE}/login`,body);
return promise;
}

function getTransactions(userToken: any,userId: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  };
    const response = axios.get(`${URL_BASE}/funds/${userId}`, config);
    return response;
}

export{postRegistration, getTransactions, postLogin}

