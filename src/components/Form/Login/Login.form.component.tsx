import { useNavigate } from "react-router-dom";
import image_login from "../../../assets/images/undraw_medicine_logo.svg";
import * as Styled from './Login.style';

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
                    <Styled.Label htmlFor="email">E-mail</Styled.Label>
                    <Styled.Input type="email" id="email" placeholder="Digite seu email" />
                </Styled.InputBox>
                <Styled.InputBox>
                    <Styled.Label htmlFor="password">Senha</Styled.Label>
                    <Styled.Input id="password" placeholder="Digite sua senha" />
                </Styled.InputBox>

                <Styled.Button type="submit">Entrar</Styled.Button>

            </Styled.Form>
        </Styled.LoginCard>
    );
}
 
export default LoginFormComponent;