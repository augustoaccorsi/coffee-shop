import React from 'react';
import { HeaderContainer, NavButtons, CartBadge } from './styles';
import logo from '../../assets/logo.svg';
import { RiMapPin2Fill } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <HeaderContainer>
                <div>
                    <img src={logo} alt="logo" />
                    <div>
                        <NavButtons>
                            <div>
                                <RiMapPin2Fill size={25} />
                                <span>Porto Alegre, RS</span>
                            </div>

                            <button>
                                <FaShoppingCart size={25} />
                            </button>
                            <CartBadge>3</CartBadge>
                        </NavButtons>
                    </div>
                </div>
            </HeaderContainer>
        </header>
    );
};

export default Header;
