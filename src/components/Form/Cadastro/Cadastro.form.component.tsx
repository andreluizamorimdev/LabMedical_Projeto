/* eslint-disable @typescript-eslint/no-misused-promises */
import { SubmitHandler, useForm } from "react-hook-form";
import InputComponent from "../../Input/Input.component";
import * as Styted from "./Cadastro.style";
import { IFormCadastro } from "./IFormCadastro";
import { useNavigate } from "react-router";
import { UserService } from "../../../services/User.service";
import { useAuth } from "../../../hooks/useAuth";
import { IUser } from "../../../utils/interfaces/IUser";

const CadastroFormComponent = () => {
    
    const { setAuthentication } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm<IFormCadastro>();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormCadastro> = (data) => {
        const { email, password, confirmPassword } = data;
        
        const newUser: IUser = {
            email,
            password
        }

        const user = UserService.ShowByEmail(email);

        if(user) {
            alert("Usuário já cadastrado no sistema");
            reset();
            return;
        }
        if(password === confirmPassword) {
            UserService.Create(newUser);
            alert("Usuário cadastrado com sucesso");
            reset();
            redirectToHome(newUser);
        }       
        

    }

    const redirectToHome = (user: IUser) => {
        setAuthentication({
            user,
            isLogged: true,
        });
        navigate('/home');
    }

    const handleLogin = () => {
        navigate('/');
    }

    return (
        <Styted.FormCadastro onSubmit={handleSubmit(onSubmit)}>
            <Styted.FormHeader>
                <h1>Cadastro</h1>
                <div>
                    <Styted.Button $active type="button" onClick={handleLogin}>Entrar</Styted.Button>
                </div>
            </Styted.FormHeader>

            <Styted.InputBox>
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
                <InputComponent 
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirme sua senha"
                    label="Confirmar Senha"
                    register={{...register('confirmPassword', {required: true, minLength:8, validate: (value: string) => {
                        if(value !== watch('password')) {
                            return "As senhas não coincidem";
                        }
                    }})}}
                    error={errors.confirmPassword}
                />
            </Styted.InputBox>

            <Styted.Button type="submit" $active={ !errors.email && !errors.password }  disabled={ !!errors.email || !!errors.password }>Cadastrar</Styted.Button>

        </Styted.FormCadastro>
    );
}
 
export default CadastroFormComponent;