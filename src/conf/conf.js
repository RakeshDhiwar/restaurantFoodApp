const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionIdFood: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_Food),
    appwriteCollectionIdOrderId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_Order),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

    adminName: String(import.meta.env.VITE_ADMIN_NAME),
    adminEmail: String(import.meta.env.VITE_ADMIN_EMAIL),
    


}

export default conf