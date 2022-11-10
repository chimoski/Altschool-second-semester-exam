import { Link } from "react-router-dom"
import { styles } from "../style_modules/userCard.module.css"

const UserCard = (
    {  
        image,
        gender,
        email,
        phone,
        name,
        page,
        id
    }) => {
    return (
        <div className={`flex flex-row mb-5 w-full`}>
            <div className={`rounded-full overflow-hidden mr-5`}>
                <img src={image} alt="" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:w-full sm:justify-between">
                <h3 className={`font-medium text-primary sm:basis-3/12`}>
                    <Link
                        to={{
                            pathname : "/people/person",
                            search : `?p=${page}&id=${id}`
                        }}
                    >
                        {name}
                    </Link>
                </h3>
                <small className={`hidden sm:inline-block sm:basis-1/12`}>{gender}</small>
                <small className={`text-zinc-300 sm:basis-3/12`} >{email}</small>
                <small className={`hidden sm:inline-block sm:basis-3/12`}>{phone}</small>
            </div>
        </div>
    )
}

export default UserCard