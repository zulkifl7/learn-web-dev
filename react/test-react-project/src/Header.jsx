function Header () {
	return (
		<header>
			<img src='./assets/react.svg' alt='Logo' className='logo' />
			<nav className='nav'>
				<div className='home'>
					<a>HOME</a>
				</div>
				<div className='about'>
					<a>ABOUT</a>
				</div>
				<div className='projects'>
					<a>PROJECTS</a>
				</div>
				<div className='contact'>
					<a>CONTACT</a>
				</div>
			</nav>
		</header>
	)
}

export default Header
