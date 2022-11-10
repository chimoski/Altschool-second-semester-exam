import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom"
import Tab, { TabSlider } from "../components/tabs"
import { ReactComponent as EmailIcon } from "../components/icons/email.svg"
import { ReactComponent as CallIcon } from "../components/icons/call.svg"
import { ReactComponent as CalendarIcon } from "../components/icons/calendar.svg"
import { ReactComponent as MailboxIcon } from "../components/icons/mailbox.svg"
import { ReactComponent as GenderIcon } from "../components/icons/gender.svg"
import { ReactComponent as LocationIcon } from "../components/icons/location.svg"
import countryFlags from "../country_flags.json"
import PersonInfo from "../components/personInfo"

const PersonInformation = ({ information }) => {
    return (
        <div>
            { information.map(info => {
                return <PersonInfo icon={info.icon} label={info.label} value={info.value} key={information.indexOf(info)} />
            }) }
        </div>
    )
}




const Person = () => {
    console.log("hello world!")
    const [person, setPerson] = useState({
        "gender": "",
        "name": {
          "title": "",
          "first": "",
          "last": ""
        },
        "location": {
          "street": {
            "number": 0,
            "name": "",
          },
          "city": "",
          "state": "",
          "country": "",
          "postcode": "",
          "coordinates": {
            "latitude": "",
            "longitude": ""
          },
          "timezone": {
            "offset": "",
            "description": ""
          }
        },
        "email": "",
        "login": {
          "uuid": "",
          "username": "",
          "password": "",
          "salt": "",
          "md5": "",
          "sha1": "",
          "sha256": ""
        },
        "dob": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 0
        },
        "registered": {
          "date": "",
          "age": 0
        },
        "phone": "",
        "cell": "",
        "id": {
          "name": "",
          "value": ""
        },
        "picture": {
          "large": "",
          "medium": "",
          "thumbnail": ""
        },
        "nat": "US"
      })
    const [activeTab, setActiveTab] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("p")
    const seed = "altschool"
    const id = Number(searchParams.get("id"))
    const contactInformation = (person) => {
        return [
            {
                label : "Email address",
                icon : <EmailIcon />,
                value : <a className={`text-primary`} href={`mailto:${person.email}`}>{person.email}</a>
            },
            {
                label : "Phone number",
                icon : <CallIcon />,
                value : <a className={`text-primary`} href={`tel:${person.cell}`}>{person.cell}</a>
            },
            {
                label : "Address",
                icon : <LocationIcon />,
                value : <a className={`text-primary`} href={`geo:${person.location.coordinates.latitude},${person.location.coordinates.longitude}`}>{` ${person.location.street.number} ${person.location.street.name}, ${ person.location.city }, ${person.location.state}.`}</a>
            },
            {
                label : "Postal code",
                icon : <MailboxIcon />,
                value : person.location.postcode
            },
        ]
    }
    const personalInformation = (person) => {
        const month = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
        const date = new Date(person.dob.date)
        const countryFlagImage = (
        <div>
            <img src={countryFlags[person.nat].image} alt={``} className={`w-6 h-6`} />
        </div>
        )
        return [
            {
                label : "Date of birth",
                icon : <CalendarIcon />,
                value : `${date.getDate()} ${ month[date.getMonth()]}, ${date.getFullYear()}`
            },
            {
                label : "Gender",
                icon : <GenderIcon />,
                value : person.gender
            },
            {
                label : "Nationality",
                icon : countryFlagImage,
                value : countryFlags[person.nat].name
            },
        ]
    }
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
            const results = data.results
            for (let result of results) {
                if (results.indexOf(result) + 1 === id) {
                    setPerson(result)
                }
            }
        })
    }, [])
    return (
        <div className={`py-12 container`}>
            <div className={`flex flex-col items-center mb-16`}>
                <div className={`mb-3 relative rounded-full overflow-hidden inline-block`}>
                    <img  src={person.picture.large} alt={``} />
                </div>
                <div className={`flex flex-col justify-center items-center`}>
                    <h3 className={`text-2xl font-semibold`}>{person.name.first} {person.name.last}</h3>
                    <small className={`text-sm text-zinc-200`}>{person.email}</small>
                </div>
            </div>
            <div>
                <div>
                    <div className={`flex flex-row mb-10 relative`}>
                        <Tab id={1} activeTab={activeTab} setActiveTab={setActiveTab} >Personal Information</Tab>
                        <Tab id={2} activeTab={activeTab} setActiveTab={setActiveTab} >Contact Information</Tab>
                        <TabSlider activeTab={activeTab}  />
                    </div>
                    <div>
                        { activeTab === 1 ? <PersonInformation information={personalInformation(person)} /> : <PersonInformation information={contactInformation(person)} /> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person