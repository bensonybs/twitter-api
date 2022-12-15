const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user-controller')
const { authenticated } = require('../../middleware/auth')
const upload = require('../../middleware/multer')

router.get('/top', authenticated, userController.getUsersTop)
router.get('/login_user', authenticated, userController.getLoginUserProfile)
router.put('/:id/setting', authenticated, userController.putUserSetting)
router.get('/:id/replied_tweets', authenticated, userController.getUserReplies)
router.get('/:id/tweets', authenticated, userController.getUserTweets)
router.get('/:id/likes', authenticated, userController.getUserLikes)
router.get('/:id/followers', authenticated, userController.getUserFollowers)
router.get('/:id/followings', authenticated, userController.getUserFollowings)
router.get('/:id', authenticated, userController.getUserProfile)
router.put('/:id', authenticated, upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), userController.putUserProfile)
router.post('/', userController.signUp)
module.exports = router
