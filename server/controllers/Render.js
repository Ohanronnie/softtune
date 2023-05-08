import fs from "fs";
import Song from "../models/Song.js";

class Music {
	constructor() {}
	static async music(req, res) {
		if (!req.cookies) return;
		if (!req.cookies.user_id) return;
		const id = req.params.id;
		const src = await Song.findOne({
			musicLocation: id
		}).select(
			"musicLocation"
		);
		const filePath = `assets/musics/${src.musicLocation}`;
		const stat = fs.statSync(filePath);
		const fileSize = stat.size;

		let range = req.headers.range;
		if (!range) {
			range = 'bytes=0-';
		}

		const positions = range.replace(/bytes=/, '').split('-');
		const start = parseInt(positions[0], 10);
		const end = positions[1] ? parseInt(positions[1], 10): fileSize - 1;
		const chunkSize = (end - start) + 1;

		const stream = fs.createReadStream(filePath, {
			start, end
		});

		res.writeHead(206, {
			'Content-Range': `bytes ${start}-${end}/${fileSize}`,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunkSize,
			'Content-Type': 'audio/mp3',
		});

		// Listen for the 'data' event on the stream and send it to the client.
		stream.pipe(res)

		// Listen for the 'end' event on the stream and end the response.

		// Update the start option of the stream based on the current position of the seek bar.
		req.on('data', (data) => {
			const seekTime = parseFloat(data.toString().split('=')[1]);
			stream.updateStart(start + (seekTime * chunkSize));
		});
	}
	static async image(req, res) {
		if (!req.cookies) return;
		if (!req.cookies.user_id) return;
		const id = req.params.id;
		const src = await Song.findOne({
			coverLocation: id
		}).select(
			"coverLocation"
		);
		return fs.createReadStream(`assets/images/${src.coverLocation}`).pipe(res);
	}
}
export default Music;