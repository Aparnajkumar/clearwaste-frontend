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

//register api
export const empregisterAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/empregister`,reqBody)
}

//login api
export const emploginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/emplogin`,reqBody)
}

//google login api
export const googleloginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/google-login`,reqBody)
}
//-----------------user-----------------------------
//add message
export const addmessageAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/addmessage`,reqBody)
}

//book a pick up api
export const bookapickupAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/bookpickup`,reqBody,reqHeader)
}

//user booking history
export const userbookinghistoryAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/userbookinghistory`,"",reqHeader)
}
// user profile update
export const userprofileupdateAPI=async(reqBody,reqHeader)=>{
    return await  commonAPI("PUT",`${serverURL}/updateprofile`,reqBody,reqHeader)
}

//api to make payment
export const makepaymentAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/make-payment`,reqBody,reqHeader)
}

//get rates
export const getrateAPI=async()=>{
    return await commonAPI("GET",`${serverURL}/rates`)
}


//--------------------------admin---------------------------------

//get all user api
export const getalluserAPI= async (reqHeader) => {
    return await commonAPI("GET", `${serverURL}/all-user`,"", reqHeader)
}

//get all user bookings api
export const getalluserbookingsAPI= async () => {
    return await commonAPI("GET", `${serverURL}/alluserbookings`)
}

//update booking status
export const updatestatusAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/updatebookingstatus/${id}`,reqBody,reqHeader)
}

//delete a user
export const deleteuserAPI=async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/deleteuser/${id}`)
}

//delete booking
export const deletebookingAPI=async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/deletebooking/${id}`)
}

//get all employee list
export const getallempAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/getallemp`,"",reqHeader)
}

//delete an emp
export const deleteempAPI=async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/deleteemp/${id}`)
}
//add waste rate
export const addWasteRateAPI = async (reqBody,reqHeader) => {
  return await commonAPI('POST', `${serverURL}/add-waste-rate`, reqBody,reqHeader)
}
//getwaste rate
export const getWasteRatesAPI = async () => {
  return await commonAPI('GET', `${serverURL}/rates`)
}

export const updateWasteRateAPI = async (id,reqBody) => {
  return await commonAPI("PUT", `${serverURL}/updaterate/${id}`, reqBody)
}
//get all messages
export const getallmessageAPI=async(reqBody)=>{
    return await commonAPI("GET",`${serverURL}/getmessages`,reqBody)
}
//delete a message
export const deletemessageAPI=async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/deletemessages/${id}`)
}

// ..............emp.................
export const getemplocAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/emp-loc/${id}`,reqBody,reqHeader)
}
