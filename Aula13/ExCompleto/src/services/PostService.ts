import { IPost, IPostDTO } from "../entities/Post";
import { PostRepository } from "../repositories/PostRepository";

export class PostService{
    private postRepository: PostRepository;
    constructor(repository: PostRepository){
        this.postRepository = repository
    }
    async createPost(postData: IPostDTO): Promise<IPost>{
        return await this.postRepository.createdPost({
           author: postData.author,
           content: postData.content,
           creadedAt: new Date(),
           likes: 0
       })
    }

    async getAllPosts(): Promise<IPost[]>{
        return (await this.postRepository.getAllPosts()).map((post) =>({
            
            ...post,
            _id: post._id.toString()
        }))
    }

    async giveLikePostById(id:string){
        const post = await this.postRepository.giveLikePostById(id);
        
        if(!post){
            throw new Error("Não foi encontrado um post com o id")
        }
        return post
    }
}