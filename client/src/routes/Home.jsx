import { useState, useEffect, useRef } from 'react';
import '../assets/css/home.css';
import Nav from '../components/NavBar';
import NavBar from '../components/NavBar2';
import Discover from '../components/Discover';
import Content from '../components/Content';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Foot from '../components/Footer2';
function Home(){
  return (
    <>
      <div class="react-body">
        <Nav />
        <div class="div">
          <NavBar />
          <Discover />
          <Content />
          <Main />
          <Footer />
        </div>
        <Foot />
      </div>
    </>
  )
}
export default Home
