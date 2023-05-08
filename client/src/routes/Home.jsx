import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { axiosInstance as axios } from '../utils/axios.js';
import "../assets/css/home.css";
import Nav from "../components/NavBar";
import NavBar from "../components/NavBar2";
import Discover from "../components/Discover";
import Content from "../components/Content";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Foot from "../components/Footer2";
import { auth } from "../utils/auth.js";
function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [collection,setCollection] = useState([]);
  const [isPlayed,setIsPlayed] = useState(null);
  const url = "http://localhost:3001/";
  function changePlaying(id){
    setIsPlayed(id)
  };
  useEffect(() => {
    auth(location)
      .then((response) => {
        if (response) {
          navigate("/register/login");

        }
      })
      .catch((error) => navigate("/register/login"));

    axios.post('/music?limit=5&genre=any')
      .then((response) => {
        setCollection(response.data)
      })
      .catch((error) => {alert(error);/*navigate("/register/login")*/})
  }, []);
  return (
    <>
      <div class="react-body">
        <Nav />
        <div class="div">
          <NavBar />
          <Discover />
          <Content axios={axios} change={changePlaying} collection={collection} url={url}/>
          <Main />
          <Footer axios={axios} collection={collection} isPlayed={isPlayed} url={url} />
        </div>
        <Foot />
      </div>
    </>
  );
}
export default Home;
