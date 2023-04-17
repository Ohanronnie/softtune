import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import '../assets/css/home.css';
import Nav from '../components/NavBar';
import NavBar from '../components/NavBar2';
import Discover from '../components/Discover';
import Content from '../components/Content';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Foot from '../components/Footer2';
import { auth } from '../utils/auth.js';
function Home(){
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    auth(location).then((response) => {
      if(response){
        navigate('/register/login')
      }
    }).catch(error => navigate('/register/login'))
  },[]);
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
