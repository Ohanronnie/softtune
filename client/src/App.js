import Menu from "./routes/Home";
import Upload from './routes/Upload';
import Login from "./routes/Login";
import Register from "./routes/Register";
import Confirm from './routes/Verify';
// eslint-disable-next-line
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
function App({ axios }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Upload axios={axios} />} />
          <Route path="register/login" element={<Login axios={axios} />} />
          <Route path="register/signup" element={<Register axios={axios} />} />
          <Route
            path="register/verify/:code"
            element={<Confirm axios={axios} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
