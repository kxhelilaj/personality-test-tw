import React from "react";
import "./App.css";
import WelcomePage from "./pages/welcome-page/WelcomePage";
import { ConfigProvider } from "./contexts/configProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionPage from "./pages/questions-page/QuestionPage";
import ResultsPage from "./pages/results-page/ResultPage";

function App() {
  return (
    <div className="App">
    <ConfigProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/results/:personalityType" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
    </div>

  );
}

export default App;
