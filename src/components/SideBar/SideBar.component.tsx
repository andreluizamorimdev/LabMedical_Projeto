import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import * as Icon from 'react-icons/md'

import { MENUS } from '../../utils/const/menu'; 
import * as Styled from './SideBar.style';

const SideBarComponent = () => {
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const handleOpen = () => {
        setOpen(!open);
    }

    const getIcone = (icone: string) => {
        switch(icone) {
            case 'MdExitToApp': return <Icon.MdExitToApp />;
            case 'MdPersonAdd': return <Icon.MdPersonAdd/>;
            case 'MdList': return <Icon.MdList/>;
            case 'MdAddCircle': return <Icon.MdAddCircle/>;
            default: return <Icon.MdStackedBarChart/>;
        }
    }

    const renderMenuItems = () => {
        return MENUS.map(menu =>
            <Styled.MenuItem $open={open} key={menu.id} to={menu.path} $active={ pathname === menu.path }>
                {open 
                    ? <h5 aria-label={menu.titulo}>{getIcone(menu.icone)} {menu.titulo}</h5>
                    : <h5 aria-label={menu.titulo}>{getIcone(menu.icone)}</h5>
                }
            </Styled.MenuItem>
        )
    }

    return (
        <Styled.SideBar $open={open}>
            <Styled.SideBarButton onClick={handleOpen}>
                {open 
                    ? <span>Menu <Icon.MdMenuOpen /></span>
                    : <Icon.MdMenu /> }
            </Styled.SideBarButton>
            
            { renderMenuItems() }

        </Styled.SideBar>
    );
}
 
export default SideBarComponent;