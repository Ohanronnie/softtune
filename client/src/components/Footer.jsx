import {
	useState,
	useEffect,
	useRef
} from "react";
import {
	axiosInstance as axios
} from "../utils/axios.js";
function Footer( {
	isPlayed, collection, url
}) {
	const [trackArt,
		setTrackArt] = useState(null);
	const [trackName,
		setTrackName] = useState(null);
	const [trackArtist,
		setTrackArtist] = useState(null);
	const [trackIndex,
		setTrackIndex] = useState(0);
	const [currHour,
		setCurrHour] = useState(0);
	const [currMin,
		setCurrMin] = useState(0);
	const [totalHour,
		setTotalHour] = useState(0);
	const [totalMin,
		setTotalMin] = useState(0);
	const [isPlaying,
		setIsPlaying] = useState(false);
	const [trackList,
		setTrackList] = useState(collection);
	const [played,
		setPlayed] = useState(isPlayed);
	const [seekSlider,
		setSeekSlider] = useState(0);
	const Element = useRef(document.createElement("audio"));
	const updateTimer = useRef(null);
	const seekUpdate = () => {
		let seekPosition = 0;
		if (!isNaN(Element.current.duration)) {
			seekPosition =
			Element.current.currentTime * (100 / Element.current.duration);
			setSeekSlider(seekPosition);

			let currentMinutes = Math.floor(Element.current.currentTime / 60);
			let currentSeconds = Math.floor(
				Element.current.currentTime - currentMinutes * 60
			);
			let durationMinutes = Math.floor(Element.current.duration / 60);
			let durationSeconds = Math.floor(
				Element.current.duration - durationMinutes * 60
			);

			if (currentSeconds < 10) {
				currentSeconds = "0" + currentSeconds;
			}
			if (durationSeconds < 10) {
				durationSeconds = "0" + durationSeconds;
			}
			if (currentMinutes < 10) {
				currentMinutes = "0" + currentMinutes;
			}
			if (durationMinutes < 10) {
				durationMinutes = "0" + durationMinutes;
			}

			setCurrHour(currentMinutes);
			setCurrMin(currentSeconds);
			setTotalHour(durationMinutes);
			setTotalMin(durationSeconds);
		}
	};
	const seekTo = (e) => {
		let seek = Element.current.duration * (e.target.valueAsNumber / 100);
		Element.current.currentTime = seek;
		Element.current.currentTime = seek;
		console.log(Element.current.duration);
		console.log(e.target.valueAsNumber);
	};
	const playTrack = () => {
		Element.current.play();
		setIsPlaying(true);
	};
	const pauseTrack = () => {
		Element.current.pause();
		setIsPlaying(false);
	};
	const onEnd = function (array,index) {
		// axios.post(`/music/nextTrack?current=${isPlayed}&genre=any`, {}).then((response) => setPlayed(response.data._id)).catch(console.error)
		if(index === array.length - 1){
		  setPlayed(array[0]._id)
		} else {
		  setPlayed(array[++index]._id)
		}
	}
	useEffect(function (){
	  if(isPlayed) setPlayed(isPlayed)
	},[isPlayed]);
	useEffect(() => {
		if (collection.length > 0 && played) {
			let currPlayed = collection.find(e => e._id === played);
			console.log(currPlayed);
			console.log(played,isPlayed)
			setTrackIndex(collection.indexOf(currPlayed));
			setTrackArtist(currPlayed.artist);
			setTrackName(currPlayed.title);
			setTrackArt(`${url}render/image/${currPlayed.coverLocation}`);
//			Element.current = 
			Element.current.src = `${url}render/music/${
			collection[collection.indexOf(currPlayed)].musicLocation
			}`;
			Element.current.load();
			Element.current.play();
			setIsPlaying(true);
			Element.current.addEventListener('timeupdate', seekUpdate);
			Element.current.addEventListener('ended', () => onEnd(collection, collection.indexOf(currPlayed)))
		}
		return () => {
			clearInterval(updateTimer.current);
			Element.current.pause();
			Element.current.src = "";
		};
	},
		[isPlayed,
			played]);
	console.log(isPlayed);
	return (
		<div className="footer">
      <img src={trackArt} className="img-cover img-cover-last" />
      <ul>
        <li className="song song-last">
          {trackName ? trackName: "Beautiful Mindset in our heart"}
        </li>
        <li className="title-cover title-cover-last">
          {trackArtist ? trackArtist: "John Doe"}
        </li>
		</ul>
      <i className="fa backward fa-step-backward" onclick="prevTrack()" />
      <i onClick={(e) => (isPlaying ? pauseTrack(): playTrack())} id="play">
        <i class={`fa fa-${isPlaying ? "pause": "play"}`}></i>
      </i>
      <i className="fa forward fa-step-forward" onclick="nextTrack()" />
      <span id="hr">{currHour ? currHour: "00"}</span>:
      <span id="min">{currMin ? currMin: "00"}</span>
      <input
		value={seekSlider}
		onInput={seekTo}
		type="range"
		className="slider inp"
		/>
      <span id="sec">{totalHour ? totalHour: "00"}</span>:
      <span id="milli">{totalMin ? totalMin: "00"}</span>
</div>
);
}
export default Footer;