import NavbarType from "../types/NavbarType";
import logo from "../assets/logo.png";

const Navbar = (props: NavbarType) => {
	const links = {
		Dashboard: props.currentPage === "Dashboard",
		Product: props.currentPage === "Product",
		Profile: props.currentPage === "Profile",
	};

	return (
		<header className="bg-navy p-4 flex flex-row justify-between top-0 sticky">
			<div>
				<img src={logo} alt="HydroSense logo" />
			</div>
			<nav>
				<ul className="flex flex-row">
					{Object.keys(links).map((key, index) => {
						let className = "mx-4 cursor-pointer ";

						if (links[key as keyof typeof links]) {
							className += "text-biru5 underline decoration-biru5";
						} else {
							className += "text-white hover:underline hover:decoration-biru-5 hover:text-biru5";
						}

						return (
							<li key={index}>
								<a className={className}> {key} </a>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
