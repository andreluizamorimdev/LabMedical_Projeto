import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home.page";
import LoginPage from "./pages/Login/Login.page";
import CadastroPage from "./pages/Cadastro/Cadastro.page";
import Layout from "./layout/Layout.component";
import { ToolbarTituloProvider } from "./contexts/ToolbarTitulo/ToolbarTitulo.context";
import CadastroPacientePage from "./pages/CadastroPaciente/CadastroPaciente.page";
import ListaProntuarioPage from "./pages/ListaProntuario/ListaProntuario.page";
import CadastroConsultaPage from "./pages/CadastroConsulta/CadastroConsulta.page";
import CadastroExamePage from "./pages/CadastroExame/CadastroExame.page";

function App() {
  return (
    <ToolbarTituloProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/pacientes" element={<CadastroPacientePage />} />
            <Route path="/pacientes/:id" element={<CadastroPacientePage />} />
            <Route path="/prontuarios" element={<ListaProntuarioPage />} />
            <Route path="/consultas" element={<CadastroConsultaPage />} />
            <Route path="/exames" element={<CadastroExamePage />} />
          </Route>
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </Router>
    </ToolbarTituloProvider>
  )
}

export default App
