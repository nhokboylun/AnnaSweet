import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import mainMenu from "../images/Menu.jpg";
import Menu from "../menu/Menu";

function Home() {
  let loginValid = false;
  const check = useSelector((state) => state.user.username);
  if (
    check.length !== 0 &&
    check !== "registerFailure" &&
    check !== "authFailure"
  )
    loginValid = true;

  const navigate = useNavigate();
  useEffect(() => {
    if (!loginValid) {
      navigate("/Login");
    }
  }, [loginValid, navigate]);

  if (!loginValid) return null;

  return (
    <div className="bg-gray-100">
      <h1 className="  bg-gradient-to-b from-blue-500 to-red-500 py-4 text-center text-xl text-pink-300">
        Up to 10% off on everyday order
      </h1>
      <div className="flex flex-col items-center justify-center">
        <img src={mainMenu} alt="Our Menu" className="h-[500px] w-[500px]" />
      </div>

      <Menu />
    </div>
  );
}

export default Home;
