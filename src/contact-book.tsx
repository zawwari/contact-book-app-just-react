import './styles/styles.css';
import ContactCard from './components/ContactCard';
import { useState } from 'react';

const ContactBook = () => {
  const [inputVals, setInputVals] = useState({
    field1: '',
    field2: ''
  })

const [cardData,setCardData] = useState([])

  const handleChange = (e) => {
    console.log(e.target.value)
    const {name,value} = e.target;
    setInputVals({
      ...inputVals,
    [name] : value,
    })}

  const handleSubmit = ()=>{
const contact = {
id:Date.now(),
name : inputVals.field1,
number: inputVals.field2,
}

setCardData([...cardData ,contact])

setInputVals({
  field1:'',
  field2:'',
})
  }

const  handleDel=(id)=>{
setCardData(cardData.filter((value)=> value.id != id));
}

  return <div className="main">
  <div className="user-box">
      <h1>Add a contact</h1>

      <div className="input-details">
        <label htmlFor=""> Name
          <input type="text"
            name="field1" id=""
            placeholder="please enter name"
            value={inputVals.field1}
            onChange={handleChange}
          />
        </label>

        <label htmlFor=""> Number
          <input type="number" name="field2" id="" onChange={handleChange}
            placeholder="please enter number" value={inputVals.field2} />
        </label>

        <button onClick={handleSubmit}>Add to Contacts</button>
      </div>

    </div>

    <div className="list-wrapper-card">

{ cardData.map ((data) => ( 

      <ContactCard key ={data.id} id = {data.id} contact={data.name} phone = {data.number} onHandel = {handleDel}/>
))}
    </div>

  </div>;
};

export default ContactBook;
