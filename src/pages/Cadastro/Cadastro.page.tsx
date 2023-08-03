import CadastroFormComponent from "../../components/Form/Cadastro/Cadastro.form.component";
import image_cadastro from "../../assets/images/undraw_doctors_cadastro.svg";
import * as Styled from './Cadastro.style';

const CadastroPage = () => {
    return ( 
        <Styled.CadastroContainer>
            <Styled.CadastroCard>
                <Styled.CadastroImageBox>
                    <img className="image" src={image_cadastro} alt="Dois médicos lado a lado, um deles com uma ficha de prontuário na mão" />
                </Styled.CadastroImageBox>
                <CadastroFormComponent />
            </Styled.CadastroCard>
        </Styled.CadastroContainer>
    );
}
 
export default CadastroPage;