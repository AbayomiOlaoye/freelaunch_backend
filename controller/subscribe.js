const Subscriber = require('../model/subscribe');

const subscribe = async (req, res) => {
  try {
    const { email, name } = req.body;

    const subscriber = new Subscriber({
      name,
      email,
    });

    await subscriber.save();
    res.status(201).json(subscriber);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error subscribing' });
  }
}

const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();

    res.status(200).json(subscribers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching subscribers' });
  }
}

const deleteSubscriber = async (req, res) => {
  try {
    const { subscriberId } = req.params;

    const subscriber = await Subscriber.findById(subscriberId);
    if (!subscriber) {
      return res.status(404).json({ error: 'Subscriber not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting subscriber' });
  }
}

module.exports = {
  subscribe,
  getSubscribers,
  deleteSubscriber,
};