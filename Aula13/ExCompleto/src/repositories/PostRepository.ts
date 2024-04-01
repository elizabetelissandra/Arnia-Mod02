import { Collection, Db, ObjectId } from "mongodb";
import { IPost, IPostDTO } from "../entities/Post";

export class PostRepository {
  postCollection: Collection<Omit<IPost, "_id">>;
  constructor(db: Db) {
    this.postCollection = db.collection("posts");
  }

  async createdPost(postData: Omit<IPost, "_id">): Promise<IPost> {
    const insertPostResult = await this.postCollection.insertOne(postData);
    return {
      _id: insertPostResult.insertedId.toString(),
      ...postData
    };
  }
  async getAllPosts() {
    return await this.postCollection.find({}).toArray();
  }

  async giveLikePostById(id: string) {
    return await this.postCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $inc: { likes: +1 }
      }
    );
  }

  async listAllPostByAuthor(author: string) {
    return await this.postCollection.find({ author: author }).toArray();
  }

  async deletePostById(id: string) {
    return await this.postCollection.deleteOne({ _id: new ObjectId(id) });
  }
}
