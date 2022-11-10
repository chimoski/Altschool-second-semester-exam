import Button from "../components/button"
import Form from "../components/form"
import FormGroup from "../components/formGroup"
import Label from "../components/label"
import TextInput from "../components/textInput"
import { ReactComponent as GoogleSvg } from "../google.svg"


const Login = () => {
    return (
        <div className={` flex flex-row`}>
            <div className={` hidden md:inline-block basis-6/12 h-screen overflow-hidden`}>
                <img src={`side-image.jpg`} className={`object-cover`} alt="" />
            </div>
            <div className={`py-10 container md:basis-6/12`}>
                <h1 className={`font-bold text-4xl text-center mb-20`}>Login</h1>
                <Form>
                    <FormGroup className={`mb-4`}>
                        <TextInput/>
                        <Label htmlFor={`email`}>Email</Label>
                    </FormGroup>
                    <FormGroup className={`mb-12`}>
                        <TextInput type="password" />
                        <Label htmlFor={`email`}>Password</Label>
                    </FormGroup>
                    <FormGroup className={`mb-4`}>
                        <Button type={`submit`} size={`fill`}>Log in</Button>
                    </FormGroup>
                    <FormGroup className={`mb-`}>
                        <Button type={`submit`} size={`fill`} variant={`secondary`} className={`flex flex-row justify-center items-center`}>
                            <span className={`mr-3`}><GoogleSvg className={``}/></span>
                            <span>Log in with google</span>
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}

export default Login