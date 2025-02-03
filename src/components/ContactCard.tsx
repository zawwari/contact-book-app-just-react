import '../styles/styles.css';

import { useDispatch, useSelector } from 'react-redux';

  import { handleDel } from '../store/slices/ContactCardSlice';
  import { RootState, AppDispatch } from '../store/store'



interface contactProps{
  id:number,
  contact:string,
  phone:string,

}

const ContactCard:React.FC<contactProps> = ({contact, phone, id})=> {
  const dispatch:AppDispatch = useDispatch();
  const inputVals= useSelector((state:RootState) => state.contact.inputVals)
  const contacts= useSelector((state:RootState) => state.contact.contacts)



   return (
    <div className="card">
      <h1 className='margin-top'>{contact}</h1>
      <h2 className='margin-top'>{phone}</h2>

      <button onClick={(()=>dispatch(handleDel(id)))}>Block</button>
    </div>
  )
}

export default ContactCard;
