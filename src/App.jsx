import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getDocs, query, collection, orderBy } from 'firebase/firestore'
import './App.css'
import db from './utils/db'
import Title from './components/Title'
import Search from './components/Search'
import Nav from './components/Nav'

function App() {
  const [contacts, setContacts] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filteredContacts, setFilteredContacts] = useState([])

  const fetchContacts = async() => {
    const querySnapshot = await getDocs(
      query(collection(db, 'contacts'), orderBy('lastName', 'asc'))
    );
    const contactList = [];
    querySnapshot.forEach((doc) => {
      contactList.push({
        id: doc.id,
        name: `${doc.data().firstName} ${doc.data().lastName}`,
        firstName: doc.data().firstName,
        lastName: doc.data().lastName,
      });
    });
    setContacts(contactList)
  }

  useEffect(()=>{
    fetchContacts()
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value)
    const resultContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredContacts(resultContacts)
  };

  return (
    <>
        <Nav hiddenAction={false} actionText={<span className="fs-3 fw-bold">+</span>} actionTo="/new"></Nav>
        <Title text="Contacts"></Title>
        <Search handleSearch={handleSearch}></Search>
        <div className="list-group">
          {(searchValue ? filteredContacts : contacts).map(({id, firstName, lastName}) => (
              <Link className="list-group-item list-group-item-action" key={id} to={`/details/${id}`}>
                  {firstName} {lastName}
              </Link>
          ))}
        </div>
    </>
  )
}

export default App
