import Menu from "./routes/Home";
import Upload from './routes/Upload';
import Login from "./routes/Login";
import Register from "./routes/Register";
import Confirm from './routes/Verify';
import Home from './routes/Home';
import { axiosInstance } from './utils/axios.js';
import { auth } from './utils/auth.js';
import { useEffect } from 'react';
// eslint-disable-next-line
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Menu axios={axiosInstance} />} />
          <Route path="home" element={<Home axios={axiosInstance} />} />
          <Route path="upload" element={<Upload axios={axiosInstance} />} />
          <Route path="register/login" element={<Login axios={axiosInstance} />} />
          <Route path="register/signup" element={<Register axios={axiosInstance} />} />
          <Route
            path="register/verify/:code"
            element={<Confirm axios={axiosInstance} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
