import { useNavigate } from "react-router";
import NavbarType from "../types/components/NavbarType";
import logo from "../assets/logo.png";

const Navbar = (props: NavbarType) => {
	const links = [
		{
			text: "Dashboard",
			isActive: props.currentPage == "Dashboard",
			link: "/dashboard",
		},
		{
			text: "Product",
			isActive: props.currentPage == "Product",
			link: "/products",
		},
		{
			text: "Profile",
			isActive: props.currentPage == "Profile",
			link: "/profile",
		},
	];

	const navigate = useNavigate();

	return (
		<header className="bg-navy p-4 flex flex-row justify-between top-0 sticky">
			<div>
				<img src={logo} alt="HydroSense logo" />
			</div>
			<nav>
				<ul className="flex flex-row">
					{links.map((item, index) => {
						let className = "mx-4 cursor-pointer ";

						if (item.isActive) {
							className += "text-biru5 underline decoration-biru5";
						} else {
							className += "text-white hover:underline hover:decoration-biru-5 hover:text-biru5";
						}

						return (
							<li key={index}>
								<a className={className} onClick={() => navigate(item.link)}>
									{item.text}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
