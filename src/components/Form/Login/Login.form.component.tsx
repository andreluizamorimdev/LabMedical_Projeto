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

    const onSubmit: SubmitHandler<IFormLogin> = async (data) => {
        const { email, password } = data;

        const user = await UserService.ShowByEmail(email);

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

    const handleCadastrar = () => {
        navigate('/cadastro');
    }

    return (
            <Styled.Form onSubmit={handleSubmit(onSubmit)}>
                <Styled.FormHeader>
                    <h1>Login</h1>
                    <div>
                        <Styled.Button $active type="button" onClick={handleCadastrar}>Criar conta</Styled.Button>
                    </div>
                </Styled.FormHeader>
                
                <Styled.InputBox>
                    <InputComponent 
                        id="email" 
                        type="email" 
                        placeholder="Digite seu email" 
                        label="E-mail" 
                        register={{...register('email', {required: "O email é obrigatório", validate: {matchPath: (v:string) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)} })}}
                        error={errors.email}
                    />
                    <InputComponent 
                        id="password" 
                        type="password" 
                        placeholder="Digite sua senha" 
                        label="Senha" 
                        register={{...register('password', {required: "A senha é obrigatória", minLength: {value: 8, message: "A senha deve ter no mínimo 8 caracteres"} })}}
                        error={errors.password}
                    />
                </Styled.InputBox>

                <Styled.Button $active={ !errors.email && !errors.password } disabled={ !!errors.email || !!errors.password } type="submit">Entrar</Styled.Button>

                <Styled.EsquiciSenha onClick={handleEsqueciSenha}>Esqueceu sua senha? Clique aqui</Styled.EsquiciSenha>

            </Styled.Form>
    );
}
 
export default LoginFormComponent;