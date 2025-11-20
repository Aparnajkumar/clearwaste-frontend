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
//-----------------user-----------------------------

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