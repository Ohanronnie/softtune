import User from "../models/User.js";
import Song from "../models/Song.js";
class Content {
	constructor() {}
	static async getContent(req, res) {
		let {
			limit,
			genre
		} = req.query;
		if (genre === "any") {
			let allSong = await Song.find({}).sort({
				createdAt: 1,
				"details.popular": 1
			}).limit(Number(limit));
			let songToBeSent = [];
			allSong.map(async (value, index, array) => {
				let eachUser = await User.findOne({
					_id: value.user
				}).select(
					"firstName lastName"
				);
				delete value._doc.user;
				delete eachUser._doc._id;
				songToBeSent.push({
					...value._doc,
					...eachUser._doc,
				});
				if (index === array.length - 1) {
					return res.status(200).json(songToBeSent);
				}
			});
		}
	}
	static async next(req,
		res) {

		let {
			current, genre
		} = req.query;
		// Getting the currently played and requesting the next
		if (genre === "any") {
			let doc = await Song.find({}).sort({
				createdAt: 1,
				"details.popular": 1,
			});
			let previous = await Song.findOne({
				_id: current
			});
			// the currently played position on the doc
			console.log(doc);
			console.log(previous);
			let currentPosition = doc.find(e => e._id.toString() === previous._id.toString());
			let currentPositionIndex = doc.indexOf(currentPosition);
			let nextPosition = {};
			if (currentPositionIndex === doc.length - 1) nextPosition = doc[0];
			else nextPosition = doc[++currentPositionIndex]
			console.log(nextPosition);
			delete nextPosition.user;
			res.status(200).json(nextPosition)
		}

	}
}
export default Content;