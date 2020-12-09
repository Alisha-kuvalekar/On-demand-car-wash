const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');

const controller = require('../controllers/service_addon_promocode');
const router = Router();


//Get the list of all active services
router.get('/services',requireAuth, controller.get_services);

//get all active addons by service name
router.get('/addons/:service',requireAuth, controller.get_addons);

//get active promocodes by service name
router.get('/promocodes/:service',requireAuth, controller.get_promocodes);


module.exports= router;