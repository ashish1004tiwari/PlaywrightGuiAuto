import cryptoJs from "crypto-js";
import process from "node:process";
import fs from 'fs';
import path from 'path';
import { json } from "node:stream/consumers";
import { APIRequestContext } from "@playwright/test";
import { request } from "@playwright/test";
import apipath from '../data/api-data/api-path.json';
import restfulApiData from '../data/api-data/restful-booker-api.json'


export default class CommonUtilsApi {
    private request : APIRequestContext;

    constructor(request : APIRequestContext){
        this.request = request;

    }

    public async create_Token(){
       // console.log(process.env.API_USER_NAME ,process.env.API_PASSWORD );
        const response = await this.request.post(apipath.api_path,{data:{
            "username" : process.env.API_USER_NAME,
            "password" : process.env.API_PASSWORD
        }})
       // console.log(response)
        const jsonResponse = await response.json();
        //console.log(jsonResponse)
        const token = jsonResponse.token;
        return token;


    }

    public async create_Booking(){
         const json_data = restfulApiData['booking_data_for_post_call'];
         const response = await this.request.post(apipath.booking_path, {data : json_data});
         const jsonResponse = await response.json();
         return jsonResponse.bookingid
    }


     

    /**
     * 
     * @param jsonRes 
     * This code block save json response from calls
     */
    public saveJsonResponse(jsonRes : JSON){
         const outputDir = path.join(__dirname, '../data/output-data');
          const filePath = path.join(outputDir, 'response-output.json');
        
          // Create the directory if it doesn't exist
          if (!fs.existsSync(outputDir)){
            fs.mkdirSync(outputDir, { recursive: true });
          }
        
          // Write JSON object to file (prettified with 2-space indentation)
          fs.writeFileSync(filePath, JSON.stringify(jsonRes, null, 2), 'utf-8');
          console.log(`JSON successfully saved to: ${filePath}`);
    }

    public getIdFromJSON(){

        const outputDir = path.join(__dirname, '../data/output-data');
            const filePath = path.join(outputDir, 'response-output.json');
        
          // Create the directory if it doesn't exist
          if (!fs.existsSync(outputDir)){
            fs.mkdirSync(outputDir, { recursive: true });
          }
        
          // Write JSON object to file (prettified with 2-space indentation)
          //fs.writeFileSync(filePath, JSON.stringify(jsonRes, null, 2), 'utf-8');
          const f = fs.readFileSync(filePath,'utf-8');
          const ids = (JSON.parse(f)).bookingid;
          console.log(`Current Id in record is ${ids}`)
          return ids;


    }

}
