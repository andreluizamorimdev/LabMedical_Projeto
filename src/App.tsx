import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home.page";
import LoginPage from "./pages/Login/Login.page";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  )
}

export default App
