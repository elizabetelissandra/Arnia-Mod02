export interface IPost{
    _id: string;
    author: string; 
    content:string; 
    creadedAt: Date; 
    likes: number;
}

// DTO: Data Transfer Object

export interface IPostDTO{
    author: string;
    content: string;
}
