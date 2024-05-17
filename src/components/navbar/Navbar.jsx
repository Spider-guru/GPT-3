import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { useState } from "react";

const Navbar = () => {
	let [toggleMenu, setToggleMenu] = useState(false);
	let Menu = () => (
		<>
			<p className=''>
				<a href='#home' className=''>
					Home
				</a>
			</p>
			<p>
				<a href='#wgpt3' className=''>
					What is GPT3?
				</a>
			</p>
			<p>
				<a href='#possibility' className=''>
					Open AI
				</a>
			</p>
			<p>
				<a href='#features' className=''>
					Case Studies
				</a>
			</p>
			<p>
				<a href='#blog' className=''>
					Library
				</a>
			</p>
		</>
	);
	return (
		<div className='gpt3__navbar'>
			<div className='gpt3__navbar-links'>

				<div className='gpt3__navbar-links_logo'>
					<img src={logo} alt='logo' className='' />
				</div>

				<div className='gpt3__navbar-links_container'>
					<Menu />
				</div>

			</div>

			<div className='gpt3__navbar-sign'>
				<p className=''>Sign In</p>

				<button type='button' className=''>
					Sign Up{" "}
				</button>
			</div>

			<div className='gpt3__navbar-menu'>
				{toggleMenu ? (
					<RiCloseLine
						color='#fff'
						size={27}
						onClick={() => setToggleMenu((prev) => (prev = false))}
					/>
				) : (
					<RiMenu3Line
						color='#fff'
						size={27}
						onClick={() => setToggleMenu((prev) => (prev = true))}
					/>
				)}
				{toggleMenu && (
					<div className='gpt3__navbar-menu_container scale-up-center '>
						<div className='gpt3__navbar-menu_container-links'>
							<Menu />
						</div>
						<div className='gpt3__navbar-menu_container-links-sign'>
							<p className=''>Sign In</p>
							<button type='button' className=''>
								Sign Up
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
