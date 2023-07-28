import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home.page";
import LoginPage from "./pages/Login/Login.page";
import CadastroPage from "./pages/Cadastro/Cadastro.page";
import Layout from "./layout/Layout.component";
import { ToolbarTituloProvider } from "./contexts/ToolbarTitulo/ToolbarTitulo.context";

function App() {
  return (
    <ToolbarTituloProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </Router>
    </ToolbarTituloProvider>
  )
}

export default App
