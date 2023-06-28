import axios from "axios";
import { registerUserInputs } from "src/app/data-Types/data-types.module";

const URL_BASE= 'http://localhost:3000';


function postRegistration(body: Required<registerUserInputs>){
  const promise = axios.post(`${URL_BASE}/register`,body);
  return promise;
}

async function getTransactions(userToken: any,userId: any) {
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  };
    const response = await axios.get(`${URL_BASE}/funds/${userId}`, config);
    return response.data;
}

export{postRegistration, getTransactions}

