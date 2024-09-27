/* eslint-disable no-useless-catch */
import { Client, Account, ID} from 'appwrite';
import conf from '../conf/conf';


export class AuthService {
    client = new Client(); //Client Creation
    account;

    //Constructor
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl)
        this.client.setProject(conf.appwriteProjectId)

        this.account = new Account(this.client); //account creation
    }

    //Sign-up
    async createAccount({email, password, name}) {   //for Register 
        // eslint-disable-next-line no-useless-catch
        try {
            const useraccount = await this.account.create(ID.unique(), email, password, name);

            if(useraccount) {
                //if successfully registered call login method
                return this.login({email,password})
            }
        } catch (error) {
            throw error
        }
    }

    //Sign-in
    async login(email,password) {
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
    }

    //Sign-in with google
    async loginGoogle() {
        this.account.createOAuth2Session(
            'google',
            'http://localhost:5173/',
            'http://localhost:5173/fail'
        )
    }

    //Check Login or not
    async getCurrentUser() {
        try {
            return await this.account.get() 
        } catch (error) {
            throw error
        }
        // return null;
    }

    //logout 
    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService;