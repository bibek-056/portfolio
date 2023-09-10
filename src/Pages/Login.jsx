import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { readRequest } from "../Axios/Apihandler";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://localhost:7131/api/login", {
      headers: {
        UserId: loginData.username,
        Password: loginData.password,
        Authorization: "fgh"
      }});
      // const response = await readRequest("/login", {
      // headers: {
      //   UserId: loginData.username,
      //   Password: loginData.password,
      // }});
      if (response) {
        localStorage.setItem("UserId", JSON.stringify(response.data))
        navigate("/resume");
      }
    } catch(error) {
      console.log(error)
    }
  };

  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0000007A] md:py-10">
      <div className="flex flex-col items-center justify-center p-5 bg-white rounded w-[40%]">
        <p className="font-bold text-center text-xl leading-6 m-4"> LOGIN </p>
        <form
          className="flex flex-col gap-2 w-[80%] items-center"
          onSubmit={(e) => handleLogin(e)}
        >
          <label className="text-left text-lg leading-5">Username:</label>
          <input
            className="border rounded p-3 w-full"
            type="string"
            name="username"
            onChange={handleChange}
            placeholder="Enter your username"
          />
          <label className="text-left text-lg leading-5">Password:</label>
          <input
            className="border rounded p-3 w-full"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <button
            className="w-[40%] h-10 flex items-center justify-center p-2 border rounded bg-[#006EB9]"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
