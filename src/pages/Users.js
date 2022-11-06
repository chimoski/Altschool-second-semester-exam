import React, { useState } from "react";
import { useFetch } from "../utility/useFetch";

const Users = () => {
	const [page, setPage] = useState(1);
	const { loading, data, error } = useFetch(
		`https://randomuser.me/api/?page=${page}&results=12&seed=abc`
	);
	// console.log(data, loading);

	const [totalPages, setTotalPages] = useState(0);
	const background = "linear-gradient(180deg, #1127E3 0%, #7A46FD 100%";

	return (
		<div className='mt-10 w-full h-[50vh] ' style={{ background: background }}>
			<div className='max-w-[900px] mx-auto'>Users</div>
		</div>
	);
};

export default Users;
