import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Nav from "../components/Nav";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import db from "../utils/db";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    const fetchContactById = async () => {
      const docSnap = await getDoc(doc(db, "contacts", id));
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFirstName(data.firstName || "");
        setLastName(data.lastName || "");
        setEmail(data.email || "");
        setPhoneNumber(data.phoneNumber || "");
        setStreet(data.street || "");
        setCity(data.city || "");
        setProvince(data.province || "");
        setZip(data.zip || "");
      }
    };
    fetchContactById();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "contacts", id), {
        firstName,
        lastName,
        email,
        phoneNumber,
        street,
        city,
        province,
        zip
      });
  
      setSuccessMessage("Contact updated successfully");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  
  const handleDeleteContactById = async (selectedDocId) => {
    const docRef = doc(db, collectionId, selectedDocId)
    await deleteDoc(docRef)
    fetchContacts()
  }

  return (
    <>
      {!!successMessage && (
        <p className="alert alert-success">{successMessage}</p>
      )}
      <Nav hiddenBack={false} backText="Contacts" />
      <Title text="Edit Contact" />
      <form className="border rounded p-4" onSubmit={handleFormSubmit}>
        <div className="row py-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-7">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-5">
            <input
              type="tel"
              className="form-control"
              id="inputPhone"
              placeholder="Phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="inputStreet"
              placeholder="Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              id="inputState"
              placeholder="Province/State"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              id="inputZip"
              placeholder="Postal/Zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-2">
          <button type="submit" className="btn btn-primary">
            Update Contact
          </button>
          <Link
            type="button"
            className="btn btn-link text-decoration-none"
            to="/"
          >
            Cancel
          </Link>
        </div>
      </form>
      <button type="button" class="btn btn-danger justify-content-center" onClick={()=> {handleDeleteContactById(id)}}>Delete Contact</button>
    </>
  );
};

export default Edit;
