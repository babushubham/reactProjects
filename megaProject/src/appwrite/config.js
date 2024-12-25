import conf from "../conf/conf";
import {Client,ID, Databases, storage ,Query, Account} from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.projectId);

        this.databases = new Databases(this.client);
        this.bucket = new storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, UserId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    UserId
                }
            )
        } catch (err) {
            
        }
    }

    async updatePost(slug,{title,  content, featuredImage, status}){
            try {
                await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status

                    }
                )
            } catch (error) {
                throw error;
            }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw error;
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
        }
    }

    async getPosts(
        queries = [
            Query.equal("status", "active")
        ]
    ) {
        try {
            await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                queries
            )
        } catch (error) {
            throw error
        }
    }

    // file upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                    file
                
            )
        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
            return true
        }
        catch(error){
            throw error
        }
    }
    async getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            
        }
    }
}