import { useState, useEffect, useRef } from 'react';
import '../assets/css/home.css'
function Home(){
  return (
    <div class="react-body">
  {/*<div class="preload">
<div id="loader"></div>
  </div>*/}
  <header>
    <i className="fa fa-bars" />
    <input className="input-search" placeholder="Search" />
  </header>
  <aside>
    <div className="box-x">
      <div>
      </div>
      <span>SOFT<span style={{"color":"darkorange"}}>TUNE</span></span>
    </div>
    <span className="category-top">MENU</span>
    <ul>
      <li>
        &nbsp;&nbsp;
        <i className="fa fa-house-chimney" />
        <span>Discover</span>
      </li>
      <li>
        &nbsp;&nbsp;
        <i className="fa-solid fa-arrow-trend-up" />
        <span>Trending</span>
      </li>
      <li>
        &nbsp;&nbsp;
        <i className="fa-solid fa-music" />
        <span>Playlist</span>
      </li>
    </ul>
    <span className="category-top">ACTIONS</span>
    <ul>
      <li>
        &nbsp;&nbsp;
        <i className="fa fa-user-edit" />
        <span>Edit Profile</span>
      </li>
      <li>
        &nbsp;&nbsp;
        <i className="fa fa-cloud-upload" />
        <span>Upload music</span>
      </li>
      <li>
        &nbsp;&nbsp;
        <i className="fa fa-cog" />
        <span>Settings</span>
      </li>
      <li>
        &nbsp;&nbsp;
        <i className="logout">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIj48cGF0aCBkPSJtNiAzMGgxMmEyLjAwMjMgMi4wMDIzIDAgMCAwIDItMnYtM2gtMnYzaC0xMnYtMjRoMTJ2M2gydi0zYTIuMDAyMyAyLjAwMjMgMCAwIDAgLTItMmgtMTJhMi4wMDIzIDIuMDAyMyAwIDAgMCAtMiAydjI0YTIuMDAyMyAyLjAwMjMgMCAwIDAgMiAyeiIgZmlsbD0iIzY5Njk2OSIvPjxwYXRoIGQ9Im0yMC41ODYgMjAuNTg2IDMuNTg2LTMuNTg2aC0xNC4xNzJ2LTJoMTQuMTcybC0zLjU4Ni0zLjU4NiAxLjQxNC0xLjQxNCA2IDYtNiA2eiIgZmlsbD0iIzY5Njk2OSIvPjxwYXRoIGQ9Im0wIDBoMzJ2MzJoLTMyeiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==" alt />
        </i>
        <span>Logout</span>
      </li>
    </ul>
  </aside>
  <div className="div">
    <div className="aside">
      <span className="logo">Soft<span>tune</span></span>
      <div className="search">
        <input className="input-search" placeholder="Search" /></div>
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
    <div className="header">
      <div className="head">
        <h1>Discover</h1>
        <span>RECENTLY PLAYED</span>
        <div className="box">
          <div className="recent view-more">
            <div>
              <i className="fa fa-folder-open" />
            </div>
            <p>
              View recently played
            </p>
          </div>
        </div>
      </div>
    </div>
    {/*    <div class="content">
<span>MOST POPULAR</span>
<hr>
<table>
  <tr>
    <td class="first">01</td>
    <td class="second">Procastination? Is it really bad?<p>John Smith</p></td>
    <td class="third">Motivation</td>
    <td class="fouth"><span>89</span><span>:</span><span>98</span></td>
  </tr>
  <tr>
    <td class="first">02</td>
    <td class="second">Procastination? Is it really bad?<p>John Smith</p></td>
    <td class="third">Motivation</td>
    <td class="fouth"><span>89</span><span>:</span><span>98</span></td>
  </tr>
  <tr>
    <td class="first">03</td>
    <td class="second">Procastination? Is it really bad?<p>John Smith</p></td>
    <td class="third">Motivation</td>
    <td class="fouth"><span>89</span><span>:</span><span>98</span></td>
  </tr>
  <tr>
    <td class="first">04</td>
    <td class="second">Procastination? Is it really bad?<p>John Smith</p></td>
    <td class="third">Motivation</td>
    <td class="fouth"><span>89</span><span>:</span><span>98</span></td>
  </tr>
  <tr>
    <td class="first">05</td>
    <td class="second">Procastination? Is it really bad?<p>John Smith</p></td>
    <td class="third">Motivation</td>
    <td class="fouth"><span>89</span><span>:</span><span>98</span></td>
  </tr>
  <tr>
    <td class="first">06</td>
    <td class="second">Procastination? Is it really bad?<p>John Smith</p></td>
    <td class="third">Motivation</td>
    <td class="fouth"><span>89</span><span>:</span><span>98</span></td>
  </tr>
  <tr>
    <td class="first">07</td>
    <td class="second">Procastination? Is it really bad?<p>John Smith</p></td>
    <td class="third">Motivation</td>
    <td class="fouth"><span>89</span><span>:</span><span>98</span></td>
  </tr>
  <tr>
</table>
   </div>*/}
    <div className="content box-content">
      <span>MOST POPULAR</span>
      <hr />
    </div>
    <div className="main">
      <span>TOP PODCASTER</span>
      <hr />
    </div>
    <div className="footer">
      <img src="image.jpg" className="img-cover img-cover-last" />
      <ul>
        <li className="song song-last">Beautiful Mindset in our heart</li>
        <li className="title-cover title-cover-last">John Doe</li>
      </ul>
      <i className="fa backward fa-step-backward" onclick="prevTrack()" />
      <i onclick="playpauseTrack()" id="play"><i className="fa fa-play" /></i>
      <i className="fa forward fa-step-forward" onclick="nextTrack()" />
      <span id="hr">00</span>:<span id="min">00</span>
      <input defaultValue={0} oninput="seekTo()" type="range" className="slider inp" />
      <span id="sec">00</span>:<span id="milli">00</span>
    </div>
  </div>
  <nav>
    <div className="nav">
      <ul>
        <li><a href><i className="fa home fa-line-chart" /></a></li>
        <li><span className="span-trend">TRENDING</span></li>
      </ul>
      <ul>
        <li><a href="/home"><i className="fas home fa-house-chimney" /></a></li>
        <li><span>HOME</span></li>
      </ul>
      <ul>
        <li><a href="/profile"><i className="fa-solid home fa-user" /></a></li>
        <li><span>ME</span></li>
      </ul>
      <ul>
        <li><a href="/upload.html"><i className="fa home fa-upload" /></a></li>
        <li><span>UPLOAD</span></li>
      </ul>
    </div>
  </nav>
</div>
  )
}
export default Home
