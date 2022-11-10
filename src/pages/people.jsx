import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import UserCard from "../components/userCard"
import { Outlet } from "react-router-dom"


const People = () => {
    const [people, setPeople] = useState([])
    const seed = "altschool"
    const [page, setPage] = useState(1)
    useEffect(() => {
        axios.get("https://randomuser.me/api/", {
            params : {
                seed : seed,
                page : page,
                results : 10
            }
        }
        
        ).then((data) => {
            return data.data
        }).then((data) => {
            setPeople(data.results)
            console.log(people)
        })
    }, [page])
    return (
     <>
        <div className="container py-10">
            <h1 className={`mb-16 text-4xl font-bold text-center`}>People</h1>
            {
                people.map((person) => {
                    return <UserCard 
                    email={person.email} 
                    gender={person.gender} 
                    image={person.picture.thumbnail}
                    name={`${person.name.first} ${person.name.last}`}
                    phone={person.cell}
                    key={people.indexOf(person)}
                    page={page}
                    id={people.indexOf(person) + 1}
                    />
                })
            
            }
            
            </div>
            <main>
                <Outlet />
            </main>
     </>
    )   
}

export default People