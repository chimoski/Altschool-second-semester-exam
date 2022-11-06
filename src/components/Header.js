import React from "react";

const navItems = [
	{
		id: 1,
		title: "Login",
	},
	{
		id: 2,
		title: "Signup",
	},
	{
		id: 3,
		title: "Error-boundary",
	},
];
const Header = ({ page, setPage }) => {
	return (
		<div className='h-[50px]'>
			<nav className='flex justify-between'>
				<div>
					<h1
						className='sm:text-xl font-bold text-sm cursor-pointer'
						onClick={() => setPage("home")}>
						Random Users
					</h1>
				</div>
				<ul className='flex gap-5'>
					{navItems.map((item) => (
						<li
							key={item.id}
							className={`nav-item ${page === item.title && "active"}`}
							onClick={() => setPage(item.title)}>
							{item.title}
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Header;
