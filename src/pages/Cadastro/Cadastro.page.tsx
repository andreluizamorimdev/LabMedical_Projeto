import CadastroFormComponent from "../../components/Form/Cadastro/Cadastro.form.component";
import image_cadastro from "../../assets/images/undraw_doctors_cadastro.svg";
import * as Styled from './Cadastro.style';

const CadastroPage = () => {
    return ( 
        <Styled.CadastroCard>
            <Styled.CadastroImageBox>
                <img className="image" src={image_cadastro} alt="Dois médicos, um com as mãos no bolso e ao lado de um vaso de plantas, e uma anotando dados numa ficha e um coração no meio dos dois simbolizando o amor a medicina" />
            </Styled.CadastroImageBox>
            <CadastroFormComponent />
        </Styled.CadastroCard>
    );
}
 
export default CadastroPage;