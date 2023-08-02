import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import {MdMenu, MdMenuOpen, MdStackedBarChart, MdPersonAdd, MdList, MdAddCircle} from 'react-icons/md'

import { MENUS } from '../../utils/const/menu';
import Logo from '../../assets/images/LABMedicalLogo.png';
import * as Styled from './SideBar.style';

const SideBarComponent = () => {
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const handleOpen = () => {
        setOpen(!open);
    }

    const getIcone = (icone: string) => {
        switch(icone) {
            case 'MdPersonAdd': return <MdPersonAdd/>;
            case 'MdList': return <MdList/>;
            case 'MdAddCircle': return <MdAddCircle/>;
            default: return <MdStackedBarChart/>;
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
                    ? <span>Menu <MdMenuOpen /></span>
                    : <MdMenu /> }
            </Styled.SideBarButton>
            
            { renderMenuItems() }

            <Styled.LogoLab $open src={ Logo } alt='Logo do app LabMedical fornecida pelo lab365 para uso como asset, nela apresenta-se um monitor de batimentos cardiacos, acima do nome LABMedical' />

        </Styled.SideBar>
    );
}
 
export default SideBarComponent;