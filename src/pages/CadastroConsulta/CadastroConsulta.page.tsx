import CadastroConsultaFormComponent from '../../components/Form/CadastroConsulta/CadastroConsulta.form.component';
import * as Styled from './CadastroConsulta.style';

const CadastroConsultaPage = () => {
    return (
        <Styled.Container>
            <Styled.Card>
                <CadastroConsultaFormComponent />
            </Styled.Card>
        </Styled.Container>
    );
}
 
export default CadastroConsultaPage;