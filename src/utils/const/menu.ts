import { IMenu } from "../../components/SideBar/IMenu";

export const MENUS: Array<IMenu> = [
    {
        id: 1,
        titulo: "Inicio",
        path: "/",
        icone: "MdStackedBarChart"
    }, 
    {
        id: 2,
        titulo: "Sair",
        path: "/login",
        icone: "MdExitToApp"
    },
    {
        id: 3,
        titulo: "Cadastrar Pacientes",
        path: "/paciente",
        icone: "MdPersonAdd"
    },
    {
        id: 4,
        titulo: "Listar Prontuário",
        path: "/prontuarios",
        icone: "MdList"
    },
    {
        id: 5,
        titulo: "Cadastrar Consulta",
        path: "/consulta",
        icone: "MdAddCircle"
    },
    {
        id: 6,
        titulo: "Cadastrar Exame",
        path: "/exame",
        icone: "MdAddCircle"
    }
]