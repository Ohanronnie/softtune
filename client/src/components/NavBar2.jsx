function NavBar() {
  return (
    <div className="aside">
      <span className="logo">
        Soft<span>tune</span>
      </span>
      <div className="search">
        <input className="input-search" placeholder="Search" />
      </div>
      <hr className="hr" />
      <span>Menu</span>
      <ul>
        <li>
          <i className="fas fa-house-chimney" />
          <span>Discover</span>
        </li>
        <li>
          <i className="fas fa-house-chimney" />
          <span>Trending</span>
        </li>
        <li>
          <i className="fas fa-house-chimney" />
          <span>Streaming</span>
        </li>
        <li>
          <i className="fas fa-house-chimney" />
          <span>Playlist</span>
        </li>
        <li>
          <i className="fas fa-house-chimney" />
          <span>Bookmark</span>
        </li>
      </ul>
      <hr className="hr hr2" />
      <span>Category</span>
      <ul>
        <li>
          <i className="fas fa-house-chimney" />
          <span>Livestream</span>
        </li>
        <li>
          <i className="fas fa-house-chimney" />
          <span>Tutorial</span>
        </li>
        <li>
          <i className="fas fa-house-chimney" />
          <span>Competition</span>
        </li>
        <li>
          <i className="fas fa-house-chimney" />
          <span>Community</span>
        </li>
      </ul>
      <hr className="hr hr2" />
    </div>
  );
}
export default NavBar;
