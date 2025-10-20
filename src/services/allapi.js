import { commonAPI } from "./commonAPI"
import {serverURL} from "./serverURL"

//register api
export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/register`,reqBody)
}

//login api
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/login`,reqBody)
}