import cryptoJs from "crypto-js";
import process from "node:process";

export default class CommonUtils {
    private static SECRET_KEY = process.env.SECRET_KEY || '';

    private static ensureSecretKey() {
        if (!CommonUtils.SECRET_KEY) {
            if (process.env.SECRET_KEY) {
                CommonUtils.SECRET_KEY = process.env.SECRET_KEY;
            } else {
                throw new Error("SECRET_KEY is not defined in the environment variables.");
            }
        }
    }

    /**
     * 
     * Provides a method to encrypt data using AES encryption.
     *key  =  Safe
     * @param data 
     * @returns 
     */
    public encryptData(data: string) {
        CommonUtils.ensureSecretKey();
        const encryptedData = cryptoJs.AES.encrypt(data, CommonUtils.SECRET_KEY).toString();
       // console.log("Encrypted Data: ", encryptedData);
        return encryptedData;
    }
    /**
     * Provides a method to decrypt data using AES decryption.
     * @param encryptedData 
     * @returns 
     */
    public decryptData(encryptedData: string) {
        CommonUtils.ensureSecretKey();
        const bytes = cryptoJs.AES.decrypt(encryptedData, CommonUtils.SECRET_KEY);
        const decryptedData = bytes.toString(cryptoJs.enc.Utf8);
        //console.log("Decrypted Data: ", decryptedData);
        return decryptedData;
    }

}
