import { useAuth } from '../../hooks/useAuth';
import { MdAccountCircle } from 'react-icons/md'
import * as Styled from './Toolbar.style';
import { useToolbarContext } from '../../hooks/useToolbarContext';

const ToolbarComponent = () => {
    const { authentication } = useAuth();

    const { titulo } = useToolbarContext();

    const nomeUsuario = authentication.user.email.replace(/@.*$/,"");
    return (
        <Styled.Header>
            <Styled.TituloPagina>{ titulo }</Styled.TituloPagina>

            <Styled.Perfil>
                <Styled.NomePerfil>{nomeUsuario}</Styled.NomePerfil>
                <MdAccountCircle />
            </Styled.Perfil>
        </Styled.Header>
    );
}
 
export default ToolbarComponent;