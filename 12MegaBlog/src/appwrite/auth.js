import config from "../config/config";

import { Client, Account, ID } from "appwrite"

//this is for cleaner code
export class AuthService {
    client  = new Client()
    account;

    constructor(){
        //we did not initilize the client with the endpoints earlier as we want to do this when the object is called, that is why we have initialized it in a constructor
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID)

        this.account = new Account(this.client)
    }
    //the reason for creating these functions    is to reduce our dependency on appwrite. If we would want to use another third party service like firebase then the function would remain the same. It would still take email, password and name as inputs, only the way to create an account would change according to different services. We would have to change the constructor as well.
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if (userAccount) {
                //execute another function for LOGIN.
                return this.login({email, password})
            } else {
                return userAccount
            }

        } catch (error) {
            throw error
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }

        return null
    }
}

//creating an object of the class so that whoever uses this authService does not have to create an instance of the class. Using object allows the user to directly get the access of the methods inside the object instead of creating an instance of a class.
const authService = new AuthService()

export default authService;