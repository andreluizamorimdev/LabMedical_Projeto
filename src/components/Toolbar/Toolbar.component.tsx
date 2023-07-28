import { useAuth } from '../../hooks/useAuth';
import * as Styled from './Toolbar.style';
import { MdAccountCircle } from 'react-icons/md'
const ToolbarComponent = () => {

    const { authentication } = useAuth();
    const userName = authentication.user.email.replace(/@.*$/,"");
    return (
        <Styled.Header>
            <h1>Toolbar</h1>

            <Styled.Profile>
                <h5>{userName}</h5>
                <MdAccountCircle />
            </Styled.Profile>
        </Styled.Header>
    );
}
 
export default ToolbarComponent;