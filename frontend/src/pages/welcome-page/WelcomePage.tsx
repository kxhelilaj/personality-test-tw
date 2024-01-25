import React, { useState } from "react";
import { Button, Col, Input } from "antd";
import img from "../../assets/sky.jpg";
import TextComponent from "../../components/Text/Text";
import "./WelcomePage.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { createUser } from "../../api-service";
import { useNavigate } from "react-router-dom";

const sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${img})`,
  backgroundSize: "cover", // or contain depending on what you need
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
};

interface Data {
  username: string;
  email: string;
}

export default function WelcomePage() {
  const [data, setData] = useState<Data>({
    username: "",
    email: "",
  });
  const navigate = useNavigate();
  const disabled = data.username === "" || data.email === "";
  const createUsers = async () => {
    const response = await createUser({
      username: data.username,
      email: data.email,
    });
    if (response.status === 201 || response.status === 200) {
      navigate("/questions");
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <div style={{ ...sectionStyle, flexDirection: "column" }}>
      <div className="welcomeText">
        <Col xs={20} sm={12} lg={12}>
          <TextComponent
            text="The Personality Reveal."
            fontSize={70}
            color="white"
            fontFamily="Trebuchet MS"
            fontWeight="bold"
          />
        </Col>
        <div className="descContainer">
          <Col xs={20} sm={10} lg={10}>
            <TextComponent
              text="Discover your personality type and the best career for you. The test is free and takes less than 12 minutes.
            Enter your name and email below to get started!"
              fontSize={20}
              color="white"
              fontFamily="Trebuchet MS"
            />
            <div className="inputContainer">
              <Input
                placeholder="Name"
                size="large"
                onChange={(text) =>
                  setData((prevState) => {
                    return {
                      ...prevState,
                      username: text.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="inputContainer">
              <Input
                placeholder="Email"
                size="large"
                onChange={(text) =>
                  setData((prevState) => {
                    return {
                      ...prevState,
                      email: text.target.value,
                    };
                  })
                }
              />
            </div>
            <div className="inputContainer">
              <Button
                type="default"
                shape="round"
                size="large"
                disabled={disabled}
                onClick={createUsers}
                icon={<ArrowRightOutlined />}
              >
                Begin Test
              </Button>
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
}
