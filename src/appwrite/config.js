import { Client,   Databases, Storage,  Query, ID} from 'appwrite';
import conf from '../conf/conf';

export class FoodService{
    client = new Client
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        this.client.setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // Add new food to the DB
   async AddFood({Name, Price, type, availability = true,desc,ImageID}) {
        try {
            const promise =  await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionIdFood,
                Name.replace(/\s+/g, '').trim().toLowerCase(),
                {
                "Name":Name,
                "Price":Price,
                "type": type,
                "availability": availability,
                "desc":desc,
                "ImageID":ImageID,
                "DocumentID":Name.trim().toLowerCase()
                }
            ) 
            
            alert("food added")
            return promise;
        } catch (error) {
            console.log(error);
        }
    }


    

    // Update food
   async updateFood({Name, Price,desc,DocumentID}) {
        try {
            const promise =  await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionIdFood,
                DocumentID, 
                {
                "Name":Name,
                "Price":Price,
                "desc":desc
                }
            )
            

            //modifying Document Id
            promise.$id = Name
        } catch (error) {
            console.log(error);
        }
    }

    // Delete food
   
    async deletefood(id) {
        try {
            const promise = await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionIdFood,
                id
            )
            console.log(promise);
        } catch (error) {
            console.log(error);
        }
    }

    // Get list of foods
    async getFoodList(type) {
        try {
            const promise = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionIdFood,
                [
                    Query.equal('type', type)
                ]
            );
            return promise
        } catch (error) {
            console.log(error);
        }
    }


    //Image services

    //upload Image
    async uploadImg(Img) {
        try {
            return  await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                Img,
            )   
        } catch (error) {
            console.log(error); // Failure
        }
    }

    //Image Preview
    getImgPreview(ImgId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            ImgId
        )
    }

    //Delete Image
    async deleteImage(ImgId)  {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                ImgId
            )
        } catch (error) {
            console.log("Delete Image Error",error);
        }
    }

    //Update Image
    

   

}

const service = new FoodService()
export default service