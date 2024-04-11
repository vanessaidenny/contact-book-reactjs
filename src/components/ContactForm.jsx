import { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = ({ buttonText = "", handleSubmit, contact }) => {
  const [firstName, setFirstName] = useState(contact?.firstName || "");
  const [lastName, setLastName] = useState(contact?.lastName || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(contact?.phoneNumber || "");
  const [street, setStreet] = useState(contact?.street || "");
  const [city, setCity] = useState(contact?.city || "");
  const [province, setProvince] = useState(contact?.province || "");
  const [zip, setZip] = useState(contact?.zip || "");

  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      street: "",
      city: "",
      province: "",
      zip: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();
      handleSubmit(formData); // Call the handleSubmit function with form data
  };

  return (
    <>
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
              {buttonText}
          </button>
          <Link type="button" className="btn btn-link text-decoration-none" to="/">
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
