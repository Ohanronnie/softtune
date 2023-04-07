function Footer() {
  return (
    <div className="footer">
      <img src="image.jpg" className="img-cover img-cover-last" />
      <ul>
        <li className="song song-last">Beautiful Mindset in our heart</li>
        <li className="title-cover title-cover-last">John Doe</li>
      </ul>
      <i className="fa backward fa-step-backward" onclick="prevTrack()" />
      <i onclick="playpauseTrack()" id="play">
        <i className="fa fa-play" />
      </i>
      <i className="fa forward fa-step-forward" onclick="nextTrack()" />
      <span id="hr">00</span>:<span id="min">00</span>
      <input
        defaultValue={0}
        oninput="seekTo()"
        type="range"
        className="slider inp"
      />
      <span id="sec">00</span>:<span id="milli">00</span>
    </div>
  );
}
export default Footer;
