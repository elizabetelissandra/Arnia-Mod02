import { Request, Response } from "express";
import { PostRepository } from "../repositories/PostRepository";
import { PostService } from "../services/PostService";
import { db } from '../database/database'


const postRepository = new PostRepository(db)
const postService = new PostService(postRepository)

export async function createPostController(req: Request, res: Response){
    const {author, content} = req.body
    const post = await postService.createPost({author , content})

    
    res.status(201).send({post})
}

export async function listAllPostsController(req: Request, res: Response){
    
    const allPosts = await postService.getAllPosts()

    
    res.status(200).send({posts: allPosts})
}

export async function giveLikePostController(req: Request, res: Response) {
    const {id} = req.params;
    try {
        const giveLikePostResult = await postService.giveLikePostById(id) 
        res.status(200).send({post: giveLikePostResult})
    } catch (error) {
        console.log(error)
        res.status(400).send()
    }
}
