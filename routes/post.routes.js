const Router = require('express')
const router = new Router()
const postController = require('../controller/post.controller')

router.post('/post', postController.postController)
router.get('/post', postController.getPostsByUser)

module.exports = router