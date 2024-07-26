import React, { useContext } from 'react';
import { HeaderContainer, NavButtons, CartBadge } from './styles';
import { RiMapPin2Fill } from 'react-icons/ri';
import { PiShoppingCartFill } from 'react-icons/pi';
import { Outlet } from 'react-router-dom';
import { CoffeeContext } from '../../context/CoffeeContext';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const { coffees } = useContext(CoffeeContext);
    return (
        <>
            <header>
                <HeaderContainer>
                    <div>
                        <img src="logo.svg" alt="logo" />
                        <div>
                            <NavButtons>
                                <div>
                                    <RiMapPin2Fill size={25} />
                                    <span>Porto Alegre, RS</span>
                                </div>

                                <NavLink to="/checkout">
                                    <button disabled={coffees.length === 0}>
                                        <PiShoppingCartFill
                                            size={25}
                                            disabled
                                        />
                                    </button>
                                </NavLink>
                                {coffees.length > 0 ? (
                                    <CartBadge>{coffees.length}</CartBadge>
                                ) : null}
                            </NavButtons>
                        </div>
                    </div>
                </HeaderContainer>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
