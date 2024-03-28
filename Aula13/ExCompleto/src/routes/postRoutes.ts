import { Router} from "express"
import { createPostController, listAllPostsController, giveLikePostController } from "../controllers/postController"


const router = Router()

router.post( "/", createPostController)
router.get("/", listAllPostsController)
router.patch("/like/:id", giveLikePostController)

export default router