import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Verify from "../components/Verify.js";
const Confirm = ({ axios }) => {
  const [count, setCount] = useState(1);
  const { code } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({ error: null });
  //  const data = Verify(code,axios);
  useEffect(() => {
    Verify(code, axios)
      .then((e) => {
        setData(e);
        return e;
      })
      .then((e) => {
        setTimeout(() => {
          if (e.error) navigate("/register/signup");
          else if (!e.error) navigate("/");
        }, 2000);
      });
  }, []);
  return (
    data && (
      <div class="text-sm h-[100vh] flex item-center w-[100vw] bg-slate-100">
        <p class="mt-2 text-center flex items-center text-slate-600">
          {!Object.keys(data).includes("error")
            ? `You have successfully verified your email address you will be redirected to our home page in < ${count} second`
            : `Your token is invalid`}
        </p>
      </div>
    )
  );
};
export default Confirm;
