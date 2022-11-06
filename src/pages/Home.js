import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Users from "./Users";
import { AiOutlineClose } from "react-icons/ai";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Login from "./Login";
import Signup from "./Signup";
import ErrorBoundary from "./ErrorBoundary";
const Home = () => {
	const [page, setPage] = useState("home");

	return (
		<div className='relative  noscroll'>
			<header className='p-3 max-w-[900px] mx-auto'>
				<Header page={page} setPage={setPage} />
			</header>
			<main>
				<Users />
			</main>
			{page !== "home" && (
				<section className='absolute top-0 bg-[rgba(0,0,0,.3)] h-[100vh] w-full'>
					<div
						className={`transit bg-white pt-10 px-3 pb-3 max-w-[600px] mx-auto md:my-5 md:h-[90vh] h-[100vh] relative`}>
						<div className='absolute right-2 top-2 hidden md:block'>
							<AiOutlineClose
								className='h-6 w-6 cursor-pointer'
								onClick={() => setPage("home")}
							/>
						</div>
						<div
							onClick={() => setPage("home")}
							className='absolute left-2 top-2 md:hidden flex gap-2  cursor-pointer'>
							<FaLongArrowAltLeft className='h-6 w-6' />
							<p className='text-sm font-bold'>Go back</p>
						</div>

						{page === "Login" && <Login />}
						{page === "Signup" && <Signup />}
						{page === "Error-boundary" && <ErrorBoundary />}
					</div>
				</section>
			)}
		</div>
	);
};

export default Home;
