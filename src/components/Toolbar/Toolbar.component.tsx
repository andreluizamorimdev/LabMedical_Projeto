/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useAuth } from '../../hooks/useAuth';
import { MdAccountCircle, MdExitToApp } from 'react-icons/md'
import * as Styled from './Toolbar.style';
import { useToolbarContext } from '../../hooks/useToolbarContext';
import { useEffect, useState } from 'react';
import { LocalStorageService } from '../../services/LocalStorage.service';
import { useNavigate } from 'react-router-dom';

const ToolbarComponent = () => {
    const { authentication } = useAuth();
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const userLoggedString = LocalStorageService.get('user');
        if (userLoggedString || authentication.isLogged) {
            const userLogged = userLoggedString;
            if (userLogged && userLogged.email) {
            const nomeUsuario = userLogged.email.replace(/@.*$/, '');
            setNomeUsuario(nomeUsuario);
            }
        }
    }, []);
    
    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const handleLogout = () => {
        LocalStorageService.remove('user');
        navigate('/login');
    }

    const { titulo } = useToolbarContext();

    return (
        <Styled.Header>
            <Styled.TituloPagina>{ titulo }</Styled.TituloPagina>

            <Styled.Perfil onClick={handleDropdown}>
                <Styled.NomePerfil>{nomeUsuario}</Styled.NomePerfil>
                <MdAccountCircle />
                <Styled.PerfilDropdown $hasOpen={dropdownOpen}>
                    <Styled.PerfilDropdownItem onClick={handleLogout}>
                        <MdExitToApp />
                        Sair
                    </Styled.PerfilDropdownItem>
                </Styled.PerfilDropdown>
            </Styled.Perfil>
        </Styled.Header>
    );
}
 
export default ToolbarComponent;