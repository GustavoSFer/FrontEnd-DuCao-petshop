import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLock, faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


function Header() {
    const [menu, setMenu] = useState(false);

    const menuHeader = () => {
        setMenu(!menu);
    }

    return (
        <header className='border border-primary p-2'>
            <div className='text-end'>
                <FontAwesomeIcon icon={faBars} onClick={menuHeader} />
                {
                    menu &&
                    <div className='position'>
                        <p>
                            <Link to={"/sobreSistema"} className='link'>
                            <FontAwesomeIcon icon={faLock} onClick={menuHeader} className='me-2' />
                                Sobre o sistema
                            </Link>
                        </p>
                        <p>
                            <Link to={"/"} className='link'>
                                <FontAwesomeIcon icon={faPersonWalkingArrowRight} onClick={menuHeader} className='me-2' />
                                Logout
                            </Link>
                        </p>
                    </div>                    
                }
            </div>
        </header>
    );
}

export default Header;
