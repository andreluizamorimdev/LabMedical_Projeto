import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/Home/Home.page";
import LoginPage from "./pages/Login/Login.page";
import { SetUsuarioPadrao } from "./utils/SetUsuarioPadrao";
import CadastroPage from "./pages/Cadastro/Cadastro.page";

function App() {

  useEffect(() => {
    SetUsuarioPadrao();
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  )
}

export default App
