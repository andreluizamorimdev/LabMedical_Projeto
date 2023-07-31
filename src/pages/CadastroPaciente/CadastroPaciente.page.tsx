import CadastroPacienteFormComponent from "../../components/Form/CadastroPaciente/CadastroPaciente.form.component";
import * as Styled from './CadastroPaciente.style';
const CadastroPacientePage = () => {
    return (
        <Styled.Container>
            <Styled.Card>
                <CadastroPacienteFormComponent />
            </Styled.Card>    
        </Styled.Container>
    );
}
 
export default CadastroPacientePage;