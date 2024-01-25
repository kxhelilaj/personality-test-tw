import { useParams } from "react-router-dom";
import TextComponent from "../../components/Text/Text";
import Lottie from "react-lottie";
import congratulations from "../../lotties/congratulations.json";
import { Button } from "antd";

const ResultsPage = () => {
  let { personalityType } = useParams();

  const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: congratulations,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={{ ...style, flexDirection: "column" }}>
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
        }}
      />
      <TextComponent
        text="Congratulations on completing the test!"
        fontSize={20}
        color="white"
        fontFamily="Trebuchet MS"
      />
      <TextComponent
        text={`Your personality type is ${personalityType}`}
        fontSize={20}
        color="white"
        fontFamily="Trebuchet MS"
      />
      <Button
        style={{ marginTop: 20 }}
        onClick={() => window.location.replace("/")}
      >
        Take the test again
      </Button>
    </div>
  );
};

export default ResultsPage;
