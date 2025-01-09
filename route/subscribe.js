const express = require('express');
const subscribeRouter = express.Router();
const subscribeController = require('../controller/subscribe');

subscribeRouter.post('/subscribe', subscribeController.subscribe);
subscribeRouter.get('/subscribers', subscribeController.getSubscribers);
subscribeRouter.delete('/subscribers/:subscriberId', subscribeController.deleteSubscriber);

module.exports = subscribeRouter;
