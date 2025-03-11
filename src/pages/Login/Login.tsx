import React from "react";
import { Button } from "../../components";
import { Flex } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const hdLogin = async () => {
    const response = await fetch("http://localhost:5000/login");
    console.log("response", response);
  };

  const hdConfirm = () => {
    const res = fetch("http://localhost:5000/confirm");
    localStorage.setItem("authToken", "Done")
    navigate("/crawl")
  };
  return (
    <>
      <Flex gap="middle" wrap align="center" justify="center" style={{ marginTop: 30 }}>
        <Button onClick={hdLogin} color="danger" variant="solid">
          Đăng nhập
        </Button>
        <Button onClick={hdConfirm} color="danger" variant="outlined">
          Xác nhận
        </Button>
      </Flex>
    </>
  );
};

export default Login;
