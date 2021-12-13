const { events } = require('./data.json');

export default function getEvents(req, res) {
	if (req.method === 'GET') {
		res.status(200).json(events);
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).send({
			message: `This '${req.method}' method is not allowed`,
		});
	}
}
