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
        titulo: "Cadastrar Pacientes",
        path: "/pacientes",
        icone: "MdPersonAdd"
    },
    {
        id: 3,
        titulo: "Listar Prontuário",
        path: "/prontuarios",
        icone: "MdList"
    },
    {
        id: 4,
        titulo: "Cadastrar Consulta",
        path: "/consultas",
        icone: "MdAddCircle"
    },
    {
        id: 5,
        titulo: "Cadastrar Exame",
        path: "/exames",
        icone: "MdAddCircle"
    }
]