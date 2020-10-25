const Router = require('@koa/router');
const DogsController = require('../controllers/dogs');
const router = new Router();

const dogController = new DogsController();

router.post('/dogs', dogController.postDoggo);
router.get('/dogs', dogController.getDoggos);
router.put('/dogs', dogController.updateDoggos);
router.delete('/dogs', dogController.deleteDoggo);

module.exports = router;
