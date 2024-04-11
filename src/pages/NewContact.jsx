import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import db, { collectionId } from "../utils/db";
import Title from "../components/Title";
import Nav from "../components/Nav";

const NewContact = () => {
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const contactCollection = collection(db, collectionId);
      const formData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        street,
        city,
        province,
        zip,
      };
      const docRef = await addDoc(contactCollection, formData);
      if (docRef.id) {
        setSuccessMessage("Contact added successfully");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      {!!successMessage && (
        <p className="alert alert-success">{successMessage}</p>
      )}
      <Nav hiddenBack={false} backText="Contacts" />
      <Title text="New Contact" />
      <form className="border rounded p-4" onSubmit={handleFormSubmit}>
        <div className="row py-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-5">
            <input
              type="tel"
              className="form-control"
              id="inputPhone"
              placeholder="Phone"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
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
              onChange={(e) => {
                setStreet(e.target.value);
              }}
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
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              id="inputState"
              placeholder="Province/State"
              value={province}
              onChange={(e) => {
                setProvince(e.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              id="inputZip"
              placeholder="Postal/Zip"
              value={zip}
              onChange={(e) => {
                setZip(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mt-2">
          <button type="submit" className="btn btn-primary">
            Add Contact
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
    </>
  );
};

export default NewContact;
