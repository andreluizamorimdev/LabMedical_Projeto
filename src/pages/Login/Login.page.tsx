import LoginFormComponent from "../../components/Form/Login/Login.form.component";
import image_login from "../../assets/images/undraw_medicine_logo.svg";
import * as Styled from './Login.style';

const LoginPage = () => {
    return (
        <Styled.LoginCard>
            <Styled.ImageBox>
                <img className="image" src={image_login} alt="Dois médicos, um com as mãos no bolso e ao lado de um vaso de plantas, e uma anotando dados numa ficha e um coração no meio dos dois simbolizando o amor a medicina" />
            </Styled.ImageBox>
            <LoginFormComponent />
        </Styled.LoginCard>
    );
}
 
export default LoginPage;