import {expect} from '@playwright/test'
import{test} from '../../fixture/hooks'
import apipathdata from '../..//data/api-data/api-path.json' 
import restfulApiData from '../../data/api-data/restful-booker-api.json'
import CommonUtilsApi from '../../utils/CommonUtilsApi';
import { request } from 'node:http';


test.describe('API Test Suite' , () =>{

    
test('[API TEST] : Get all records from App api' ,{annotation : {
    type : 'TC Link',
    description : 'https://ashish1004tiwari-1783267471955.atlassian.net/browse/KAN-7'
}}, async({request}) =>{
    const response = await request.get(apipathdata.booking_path)

})



test('[API TEST] : Get single record using id from App api' ,{annotation : {
    type : 'TC Link',
    description : 'https://ashish1004tiwari-1783267471955.atlassian.net/browse/KAN-8'
}}, async({request}) =>{
    const response = await request.get(`${apipathdata.booking_path}/${restfulApiData.booking_id}`)
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");


    const bIdJsonRes =  await response.json()

    expect(bIdJsonRes).not.toBeNull();
    expect(response.headers()['content-type']).toBe(restfulApiData.content_type)

})

test('[API TEST] : Create single record on App api' ,{annotation : {
    type : 'TC Link',
    description : 'https://ashish1004tiwari-1783267471955.atlassian.net/browse/KAN-9'
    }}, async({request,commonApiutils}) =>
        {
   const json_data = restfulApiData['booking_data_for_post_call'];
   const response = await request.post(apipathdata.booking_path, {data : json_data});
   expect(response.status()).toBe(200);
   expect(response.statusText()).toBe("OK")

   const jsonResponse= await response.json();
   //console.log("Create ", jsonResponse);
   await commonApiutils.saveJsonResponse(jsonResponse);

   expect(jsonResponse.booking).toMatchObject(restfulApiData['booking_data_for_post_call'])
})


test('[API TEST] : Update Booking record value record on App api - put' ,{annotation : {
    type : 'TC Link',
    description : 'https://ashish1004tiwari-1783267471955.atlassian.net/browse/KAN-11'
    }}, async({request,commonApiutils}) =>
        {
            //const id  =  await commonApiutils.getIdFromJSON();
            const id = await commonApiutils.create_Booking();
            const token_get = await commonApiutils.create_Token();

            // console.log(id)
            // console.log("put ",restfulApiData.update_booking);
            // console.log(token_get)
            // console.log("api url ", `${apipathdata.booking_path}/${id}`)
            const response = await request.put(`${apipathdata.booking_path}/${id}`, {
                headers : {
                    Cookie : `token=${token_get}`
                },data : restfulApiData.update_booking
            });
             expect(response.status()).toBe(200);
            expect(response.statusText()).toEqual("OK")


            const jsonResponse = await response.json();
           
            expect(jsonResponse).toMatchObject(restfulApiData['update_booking']);
  
})


test('[API TEST] : Update single value record on App api - patch', {annotation : {
     type : 'TC Link',
    description : 'https://ashish1004tiwari-1783267471955.atlassian.net/browse/KAN-10'
}},async({request,commonApiutils})=>{

    //const id  =  await commonApiutils.getIdFromJSON();
    const id = await commonApiutils.create_Booking();
    const token_get = await commonApiutils.create_Token();

    const response = await request.patch(`${apipathdata.booking_path}/${id}`,{
        headers : {Cookie :  `token=${token_get}` },
        data : restfulApiData.partial_update_booking,
    })
    expect(response.status()).toBe(200);
    expect(response.statusText()).toEqual("OK")

    const jsonRes = await response.json();
    
    expect(jsonRes).toMatchObject(restfulApiData['partial_update_booking']);

})


test('[API TEST] : Delete single record on App api - del', {annotation : {
     type : 'TC Link',
    description : 'https://ashish1004tiwari-1783267471955.atlassian.net/browse/KAN-12'
}},async({request,commonApiutils})=>{

   // const id  =  await commonApiutils.getIdFromJSON();
   test.step('create booking',()=>{
    
   })
    const id = await commonApiutils.create_Booking();
    const token_get = await commonApiutils.create_Token();

    const response = await request.delete(`${apipathdata.booking_path}/${id}`,{
            headers : {
                Cookie :  `token=${token_get}` 
            }
    })
        console.log(response.status(), response.statusText());
        expect(response.status()).toBe(201);
        expect(response.statusText()).toEqual("Created")
    
})



})

