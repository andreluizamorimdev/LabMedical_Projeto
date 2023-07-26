/* eslint-disable @typescript-eslint/no-misused-promises */
import { useNavigate } from "react-router-dom";
import * as Styled from './Login.style';
import InputComponent from "../../Input/Input.component";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormLogin } from "./IFormLogin";
import { UserService } from "../../../services/User.service";
import { useAuth } from "../../../hooks/useAuth";
import { IUser } from "../../../utils/interfaces/IUser";

const LoginFormComponent  = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormLogin>();

    const navigate = useNavigate();

    const { setAuthentication } = useAuth();

    const onSubmit: SubmitHandler<IFormLogin> = (data) => {
        const { email, password } = data;

        const user = UserService.ShowByEmail(email);

        if(!user) {
            alert("Usuário não encontrado");
            reset();
            return;
        }
        password === user.password ? redirectToHome(user) : alert("Usuário e/ou senha incorretos");
        
    }

    const redirectToHome = (user: IUser) => {
        setAuthentication({
            user,
            isLogged: true,
        });
        navigate('/home');
    }

    const handleEsqueciSenha = () => {
        alert("Recurso de Esqueci minha senha está em desenvolvimento");
    }

    return (
            <Styled.Form onSubmit={handleSubmit(onSubmit)}>
                <Styled.FormHeader>
                    <h1>Login</h1>
                    <div>
                        <Styled.Button $active type="button">Criar conta</Styled.Button>
                    </div>
                </Styled.FormHeader>
                
                <Styled.InputBox>
                    <InputComponent 
                        id="email" 
                        type="email" 
                        placeholder="Digite seu email" 
                        label="E-mail" 
                        register={{...register('email', {required: true, validate: {matchPath: (v:string) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)} })}}
                        error={errors.email}
                    />
                    <InputComponent 
                        id="password" 
                        type="password" 
                        placeholder="Digite sua senha" 
                        label="Senha" 
                        register={{...register('password', {required: true, minLength:8})}}
                        error={errors.password}
                    />
                </Styled.InputBox>

                <Styled.Button $active={ !errors.email && !errors.password } disabled={ !!errors.email || !!errors.password } type="submit">Entrar</Styled.Button>

                <Styled.EsquiciSenha onClick={handleEsqueciSenha}>Esqueceu sua senha? Clique aqui</Styled.EsquiciSenha>

            </Styled.Form>
    );
}
 
export default LoginFormComponent;