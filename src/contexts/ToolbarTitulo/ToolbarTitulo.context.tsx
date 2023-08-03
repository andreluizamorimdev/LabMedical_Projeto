import { createContext, useState } from "react";
import { IToolbarTituloContext } from "./IToolbarTituloContext";
import { IProviderProps } from "../../utils/interfaces/IProviderProps";

export const ToolbarTituloContext = createContext<IToolbarTituloContext>({
    titulo: 'Sem título',
    setTitulo: () => {/* do nothing */}
});

export const ToolbarTituloProvider = ({ children }: IProviderProps) => {
    const [titulo, setTitulo] = useState<string>('Estatísticas e Informações');

    return(
        <ToolbarTituloContext.Provider value={{ titulo, setTitulo }}>
            { children }
        </ToolbarTituloContext.Provider>
    )
}