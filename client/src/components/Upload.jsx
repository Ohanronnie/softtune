import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import podcast from "../assets/images/podcast.svg";
import song from "../assets/images/music-icon.svg";
import album from "../assets/images/album.svg";
import Single from "./Upload/Single";
import { axiosInstance as axios } from "../utils/axios.js";
function Upload() {
  const [select, setSelect] = useState({
    selection: null,
    display: true,
  });
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
              setSelect({ selection: "albu", display: !select.display })
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
  return (
    <>
      <div class="content">
        <h1>Add music</h1>
        <hr />
        {select.display && <UploadType />}
        {select.selection === "song" && <Single />}
      </div>
    </>
  );
}
export default Upload;
