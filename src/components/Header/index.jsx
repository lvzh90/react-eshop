import React, { useState, useContext }  from 'react';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import './styles.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import AppContext from '@context/AppContext';

const Header = () => {
    const [ toggle, setToggle ] = useState(false);
	const [ toggleOrders , setToogleOrders ] = useState(false);
	const { state } = useContext(AppContext);

    const handleClick = () => {
        setToggle(!toggle);
    }

	const handleCarClick = () => {
		setToogleOrders(!toggleOrders);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleClick}>
                        platzi@example.com
                    </li>
					<li className="navbar-shopping-cart" onClick={handleCarClick}>
						<img src={shoppingCart} alt="shopping cart" />
						{
							state.cart.length > 0 ?
							<div>{state.cart.length}</div>
							: null
						}
					</li>
				</ul>
			</div>
            { toggle ? <Menu /> : null }
			{ toggleOrders ? <MyOrder /> : null }
		</nav>
	);
}

export default Header;
