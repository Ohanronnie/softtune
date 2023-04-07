function Footer() {
  return (
    <nav>
      <div className="nav">
        <ul>
          <li>
            <a href>
              <i className="fa home fa-line-chart" />
            </a>
          </li>
          <li>
            <span className="span-trend">TRENDING</span>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/home">
              <i className="fas home fa-house-chimney" />
            </a>
          </li>
          <li>
            <span>HOME</span>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/profile">
              <i className="fa-solid home fa-user" />
            </a>
          </li>
          <li>
            <span>ME</span>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/upload.html">
              <i className="fa home fa-upload" />
            </a>
          </li>
          <li>
            <span>UPLOAD</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Footer;
