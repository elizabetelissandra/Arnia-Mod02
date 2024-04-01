import { Router} from "express"
import { createPostController, listAllPostsController, giveLikePostController, findByAuthorIdController, deletePostById } from "../controllers/postController"


const router = Router()

router.post( "/", createPostController)
router.get("/", listAllPostsController)
router.patch("/like/:id", giveLikePostController)
router.get("/:author", findByAuthorIdController)
router.delete("/:id", deletePostById)

export default router