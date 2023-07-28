import { Outlet } from 'react-router';
import SideBarComponent from '../components/SideBar/SideBar.component';
import ToolbarComponent from '../components/Toolbar/Toolbar.component';
import * as Styled from './Layout.style';

const Layout = () => {
    return (
        <Styled.LayoutContainer>
            <SideBarComponent />
            
            <Styled.LayoutMain>

                <ToolbarComponent />

                <Styled.LayoutContent>
                    <Outlet />
                </Styled.LayoutContent>

            </Styled.LayoutMain>
        </Styled.LayoutContainer>
    );
}
 
export default Layout;