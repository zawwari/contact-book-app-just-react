import './styles/styles.css';
import ContactCard from './components/ContactCard';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateValue, addDataToContact } from './store/slices/ContactCardSlice';
import { RootState, AppDispatch } from "./store/store";

function ContactBook(){

  const dispatch:AppDispatch = useDispatch();
  const inputVals= useSelector((state:RootState) => state.contact.inputVals)
  const contacts= useSelector((state:RootState) => state.contact.contacts)

  // const [inputVals, setInputVals] = useState({
  //   field1: '',
  //   field2: ''
  // })

const [cardData,setCardData] = useState([])

  // const handleChange = (e) => {
  //   console.log(e.target.value)
  //   const {name,value} = e.target;
  //   setInputVals({
  //     ...inputVals,
  //     // its taking two values name and target value rom 2 fields
  //   [name] : value,
  //   })}

//   const handleSubmit = ()=>{
// const contact = {
// id:Date.now(),
// name : inputVals.field1,
// number: inputVals.field2,
// }
// setCardData([contact])

//   }

// setInputVals({
//   field1:'',
//   field2:'',
// })
//   }

// const  handleDel=(id)=>{
// setCardData(cardData.filter((value)=> value.id != id));
// }

  return <div className="main">
  <div className="user-box">
      <h1>Add a contact</h1>
      <div className="input-details">
        <label htmlFor=""> Name
          <input type="text"
            name="field1" id=""
            placeholder="please enter name"
            value={inputVals.field1}
            onChange={(e)=>dispatch(updateValue({name:e.target.name,
              value:e.target.value}))}
          ></input>
        </label>

        <label htmlFor=""> Number
          <input type="number" name="field2" id="" onChange={(e)=>dispatch(updateValue({name:e.target.name,
            value:e.target.value}))}
            placeholder="please enter number" value={inputVals.field2} />
        </label>

        <button onClick={()=>dispatch(addDataToContact())}>Add to Contacts</button>
      </div>

    </div>

    <div className="list-wrapper-card">

{ contacts.map ((data) => ( 
      <ContactCard key ={data.id} id ={data.id} contact={data.name} phone = {data.number}/>
))}
    </div>
  </div>
}

export default ContactBook;
