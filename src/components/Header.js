import React from "react";
import "./Header.css";
import { Link } from "react-router-dom"

function Header() {
	return (
		<div className="header">
			<div className="header__column">
				<Link className="text-link" to="#" className="header__title">JAYFLIX</Link>
			</div>
			<ul className="primary-nav">
				<li className="nav__home">
					<Link className="text-link" to="/">홈</Link>
				</li>
				<li className="nav__tvProgram">
					<Link className="text-link" to="/about">About</Link>
				</li>
				<li className="nav__movie">무비</li>
				<li className="nav__contents">NEW! 요즘 대세 콘텐츠</li>
				<li className="nav__myPick">내가 찜한 콘텐츠</li>
			</ul>
			<ul className="secondary-nav">
				<li className="header__search">
					<i className="fas fa-search"></i>
				</li>
				<li className="header__gift">
					<i className="fas fa-gift"></i>
				</li>
				<li className="header__notice">
					<i className="fas fa-bell"></i>
				</li>
				<li className="header__userInfo">
					<i className="fas fa-user"></i>
				</li>
			</ul>
		</div>
	)
}

export default Header;