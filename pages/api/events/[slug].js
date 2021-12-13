const { events } = require('./data.json');

export default function getEvents(req, res) {
	const evt = events.find(evt => evt.slug === req.query.slug);
	if (req.method === 'GET') {
		res.status(evt ? 200 : 404).json(evt ?? 'Event does not exist');
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).send({
			message: `This '${req.method}' method is not allowed`,
		});
	}
}
