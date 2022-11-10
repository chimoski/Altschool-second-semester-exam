import Button from "../components/button"
import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className={`flex flex-col container h-screen justify-center`}>
            <Button className={`mb-10`} onClick={() => navigate("/register")}>Register</Button>
            <Button variant={`secondary`} onClick={() => navigate("/login")}>Log in</Button>
        </div>
    )
}

export default Home