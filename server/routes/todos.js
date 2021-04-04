const router = require("express").Router()
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")
const ToDoController = require("../controllers/todo")
// const authorization 
router.use(authentication)
router.post("/", ToDoController.create)
router.get("/", ToDoController.find)
router.get("/:date", ToDoController.find)

router.delete("/:id",authorization, ToDoController.deleteById)
router.patch("/:id", authorization, ToDoController.switchIsDone)


module.exports = router