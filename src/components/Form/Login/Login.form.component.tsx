/* eslint-disable @typescript-eslint/no-misused-promises */
import { useNavigate } from "react-router-dom";
import image_login from "../../../assets/images/undraw_medicine_logo.svg";
import * as Styled from './Login.style';
import InputComponent from "../../Input/Input.component";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormLogin {
    email: string;
    password: string;
}

const LoginFormComponent  = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormLogin> = (data) => {

        console.log(data);
    }

    return (
        <Styled.LoginCard>
            
            <Styled.ImageBox>
                <img className="image" src={image_login} alt="Dois médicos, um com as mãos no bolso e ao lado de um vaso de plantas, e uma anotando dados numa ficha e um coração no meio dos dois simbolizando o amor a medicina" />
            </Styled.ImageBox>
            <Styled.Form onSubmit={handleSubmit(onSubmit)}>
                <Styled.FormHeader>
                    <h1>Login</h1>
                    <div className="Button-cadastrar">
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

            </Styled.Form>
        </Styled.LoginCard>
    );
}
 
export default LoginFormComponent;