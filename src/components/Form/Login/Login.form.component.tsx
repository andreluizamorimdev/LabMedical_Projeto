import { useNavigate } from "react-router-dom";
import image_login from "../../../assets/images/undraw_medicine_logo.svg";
import * as Styled from './Login.style';
import InputComponent from "../../Input/Input.component";

const LoginFormComponent  = () => {
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/home");
    }

    return (
        <Styled.LoginCard>
            
            <Styled.ImageBox>
                <img className="image" src={image_login} alt="Dois médicos, um com as mãos no bolso e ao lado de um vaso de plantas, e uma anotando dados numa ficha e um coração no meio dos dois simbolizando o amor a medicina" />
            </Styled.ImageBox>
            <Styled.Form onSubmit={redirectToHome}>
                <Styled.FormHeader>
                    <h1>Login</h1>
                    <div className="Button-cadastrar">
                        <Styled.Button type="button">Criar conta</Styled.Button>
                    </div>
                </Styled.FormHeader>
                
                <Styled.InputBox>
                    <InputComponent id="email" type="email" placeholder="Digite seu email" label="E-mail" />
                    <InputComponent id="password" type="password" placeholder="Digite sua senha" label="Senha" />
                </Styled.InputBox>

                <Styled.Button type="submit">Entrar</Styled.Button>

            </Styled.Form>
        </Styled.LoginCard>
    );
}
 
export default LoginFormComponent;