import { useState, useEffect, useRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import podcast from "../assets/images/podcast.svg";
import song from "../assets/images/music-icon.svg";
import album from "../assets/images/album.svg";
import plus from "../assets/images/plus.svg";

function Upload() {
  const [select, setSelect] = useState({
    selection: null,
    display: true,
  });
  const [songState, setSongState] = useState({});
  const [file, setFile] = useState(null);
  const [dataUrl, setDataUrl] = useState(null);
  const coverImg = useRef(null);
  const artist = useRef(null);
  const title = useRef(null);
  const genre = useRef(null);
  const description = useRef(null);
  const lyrics = useRef(null);
  const features = useRef(null);
  const music = useRef(null);
  const coverArt = useRef(null);
  useEffect(
    function () {
      if (file) {
        let fileReader = new FileReader();
        fileReader.onload = function (e) {
          console.log(e.target.result);
          if (fileReader.result) {
            setDataUrl(fileReader.result);
            document.querySelector(
              ".coverImg"
            ).innerHTML = `<img src="${fileReader.result}" alt="cover img" />`;
            document.querySelector(".coverImg").style.borderWidth = "0px";
          }
        };
        fileReader.readAsDataURL(file);
      }
    },
    [file]
  );
  const handleChange = function (e) {
    const name = e.target.name;
    const value = e.target.value;
    setSongState((songs) => ({ ...songs, [name]: value }));
  };
  const setReader = (e) => {
    const files = e.target.files[0];
    console.log(files);
    setFile(files);
  };
  const toggleError = (element, text) => {
    let tmpText = element.current.previousSibling.textContent;
    element.current?.scrollIntoView({ behavior: "smooth" });
    element.current.style.border = "1px solid red";
    element.current.previousSibling.textContent = text;
    setTimeout(
      () => (element.current.previousSibling.textContent = tmpText),
      2000
    );
  };
  const handleSubmit = (e) => {
    let specChar = /[\w\d]+/g;
    e.preventDefault();
    if (!artist.current.value || artist.current.value.length === 0)
      toggleError(artist, "Artist's name cannot be blank");
    else if (artist.current.value.length < 3)
      toggleError(artist, "Artist's name cannot be lesser than 3");
    else if (!specChar.test(artist.current.value.toLowerCase()))
      toggleError(artist, "Artist's name cannot contain special characters");
    else artist.current.style.border = "0px solid white";
    if (!title.current.value || title.current.value.length === 0)
      toggleError(artist, "Title cannot be blank");
    else title.current.style.border = "0px solid white";
    if (!description.current.value || description.current.value.length === 0)
      toggleError(description, "Description cannot be blank");
    else description.current.style.border = "0px solid white";
    if (!songState.genre) toggleError(genre, "You must select a genre");
    else genre.current.style.borderWidth = "0px";
    if (!file) alert("You must select an art/image");
    if (music.current.files.length === 0)
      toggleError(music, "You must select an music");
    else music.current.style.border = "0px solid white";
  };
  const UploadType = () => {
    return (
      <>
        <p className="label">Select your upload type...?</p>
        <div className="div-flex">
          <div
            onClick={() =>
              setSelect({ selection: "song", display: !select.display })
            }
          >
            <img src={song} />
            <span>Song</span>
          </div>
          <div
            onClick={() =>
              setSelect({ selection: "album", display: !select.display })
            }
          >
            <img src={album} />
            <span>Album</span>
          </div>
          <div
            onClick={() =>
              setSelect({ selection: "podcast", display: !select.display })
            }
          >
            <img src={podcast} />
            <span>Podcasts</span>
          </div>
        </div>
      </>
    );
  };
  const FormSong = () => {
    return (
      <form
        action="/upload"
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        <div className="join-input">
          <div>
            <label htmlFor="name">Title&nbsp;*</label>
            <input
              type="text"
              name="title"
              placeholder="Song's title"
              value={songState.title || ""}
              onChange={handleChange}
              ref={title}
              required={true}
            />
          </div>
          <div>
            <label htmlFor="artist">Artist&nbsp;*</label>
            <input
              onChange={handleChange}
              ref={artist}
              type="text"
              name="artist"
              placeholder="Artist"
              value={songState.artist || ""}
              required
            />
          </div>
        </div>
        <div className="upload-cover">
          <div className="cover-box coverImg">
            <img src={plus} className="img" alt="plus sign" />
            <label htmlFor="cover-img">Click me to select an art</label>
            <input
              type="file"
              onChange={setReader}
              id="cover-img"
              accept="image/*"
              name="cover-img"
            />
          </div>
          <div className="input-box">
            <div>
              <label htmlFor="name">Genre&nbsp; *</label>
              <select
                name="genre"
                ref={genre}
                value={songState.genre || "selected"}
                onChange={handleChange}
              >
                <option value="selected" disabled={true}>
                  -- Genre --
                </option>
                <option value="hiphop">Hip hop/Rap</option>
                <option value="soul">R&B/Soul</option>
                <option value="dance">Electronic/Dance</option>
                <option value="pop">Pop</option>
                <option value="reggae">Reggae/Dancehall</option>
                <option value="latin">Latin</option>
                <option value="afrobeat">Afrobeat</option>
                <option value="country">Country</option>
                <option value="rock">Rock</option>
                <option value="jazz">Jazz</option>
                <option value="blues">Blues</option>
                <option value="gospel">Gospel/Christian</option>
                <option value="classical">Classical</option>
                <option value="world">World</option>
                <option value="folk">Folk/Acoustics</option>
                <option value="soundtrack">Soundtracks</option>
                <option value="podcast">Podcasts</option>
                <option value="kpop">K-pop</option>
                <option value="instruments">Instrumentals</option>
              </select>
            </div>
            <div>
              <label htmlFor="artist">
                Features&nbsp;<small>Use comma to seperate artists</small>
              </label>
              <input
                onChange={handleChange}
                ref={features}
                type="text"
                name="features"
                placeholder="Features"
                value={songState.features || ""}
                required
              />
            </div>
          </div>
        </div>
        <div className="descr-lyrics">
          <div>
            <label htmlFor="description">Description&nbsp;*</label>
            <textarea
              onChange={handleChange}
              ref={description}
              type="text"
              name="description"
              placeholder="Description "
              required
              value={songState.description || ""}
            />
          </div>
          <div>
            <label htmlFor="name">Lyrics</label>
            <textarea
              ref={lyrics}
              onChange={handleChange}
              type="text"
              name="lyrics"
              placeholder="lyrics optional"
              value={songState.lyrics || ""}
            />
          </div>
        </div>
        <input
          defaultValue="aDflhh4h"
          type="text"
          style={{ display: "none" }}
          id="metadata"
          name="metadata"
          required
        />
        <label htmlFor="name">Music&nbsp;*</label>
        <input
          type="file"
          ref={music}
          name="music"
          placeholder="name of the music"
          accept="audio/*"
          required={false}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };
  const FormSon = memo(FormSong);
  return (
    <>
      <div class="content">
        <h1>Add music</h1>
        <hr />
        {select.display && <UploadType />}
        {select.selection === "song" && FormSong()}
      </div>
    </>
  );
}
export default Upload;
