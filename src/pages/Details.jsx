import { getDoc, doc } from "firebase/firestore"
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import db from "../utils/db"
import Title from "../components/Title"
import Nav from '../components/Nav'

const Details = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [address, setAddress] = useState()

    const { id } = useParams()
    
    const fetchContactById = async () => {
        const docSnap = await getDoc(doc(db, "contacts", id))
        if (docSnap.exists()) {
            setFirstName(docSnap.data().firstName)
            setLastName(docSnap.data().lastName)
            setEmail(docSnap.data().email)
            setPhoneNumber(docSnap.data().phoneNumber)
            setAddress(
                <>
                    <span>{docSnap.data().street}</span><br></br>
                    <span>{docSnap.data().city}, {docSnap.data().province}, {docSnap.data().zip}</span>
                </>
            )
        }
    }

    useEffect(() => {
        fetchContactById()
    }, [])

    return (
        <>
            <Nav hiddenBack={false} backText="Contacts" hiddenAction={false} actionText="Edit" actionTo={"/edit/" + id}></Nav>
            <Title text={`${firstName} ${lastName}`}></Title>
            <div className="border-top">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <p className="m-0">email</p>
                        <Link to={`mailto:${email}`}>{email}</Link>
                    </li>
                    {phoneNumber &&
                        <li className="list-group-item">
                            <p className="m-0">Phone</p>
                            {`(${String(phoneNumber).slice(0, 3)}) ${String(phoneNumber).slice(3, 6)}-${String(phoneNumber).slice(6)}`}
                        </li>
                    }
                    {address &&
                        <li className="list-group-item">
                            <p className="m-0">Address</p>
                            {address}
                        </li>
                    }
                </ul>
            </div>
        </>
    )
}

export default Details