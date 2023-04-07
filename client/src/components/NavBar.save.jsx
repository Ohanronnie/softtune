function Nav() {
  const toggleNav = () => {
    document.querySelector("aside").classList.toggle("active");
  };
  return (
    <>
      <header>
        <i className="fa fa-bars" onClick={toggleNav} />
        <input className="input-search" placeholder="Search" />
      </header>
      <aside>
        <div className="box-x">
          <div></div>
          <span>
            SOFT<span style={{ color: "darkorange" }}>TUNE</span>
          </span>
        </div>
        <span className="category-top">MENU</span>
        <ul>
          <li>
            <i className="fa fa-house-chimney" />
            <span>Discover</span>
          </li>
          <li>
            <i className="fa-solid fa-arrow-trend-up" />
            <span>Trending</span>
          </li>
          <li>
            <i className="fa-solid fa-music" />
            <span>Playlist</span>
          </li>
        </ul>
        <span className="category-top">ACTIONS</span>
        <ul>
          <li>
            <i className="fa fa-user-edit" />
            <span>Edit Profile</span>
          </li>
          <li>
            <i className="fa fa-cloud-upload" />
            <span>Upload music</span>
          </li>
          <li>
            <i className="fa fa-cog" />
            <span>Settings</span>
          </li>
          <li>
            <i className="logout">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIj48cGF0aCBkPSJtNiAzMGgxMmEyLjAwMjMgMi4wMDIzIDAgMCAwIDItMnYtM2gtMnYzaC0xMnYtMjRoMTJ2M2gydi0zYTIuMDAyMyAyLjAwMjMgMCAwIDAgLTItMmgtMTJhMi4wMDIzIDIuMDAyMyAwIDAgMCAtMiAydjI0YTIuMDAyMyAyLjAwMjMgMCAwIDAgMiAyeiIgZmlsbD0iIzY5Njk2OSIvPjxwYXRoIGQ9Im0yMC41ODYgMjAuNTg2IDMuNTg2LTMuNTg2aC0xNC4xNzJ2LTJoMTQuMTcybC0zLjU4Ni0zLjU4NiAxLjQxNC0xLjQxNCA2IDYtNiA2eiIgZmlsbD0iIzY5Njk2OSIvPjxwYXRoIGQ9Im0wIDBoMzJ2MzJoLTMyeiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="
                alt
              />
            </i>
            <span>Logout</span>
          </li>
        </ul>
      </aside>
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
    </>
  );
}
export default Nav;
