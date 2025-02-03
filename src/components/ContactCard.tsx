import '../styles/styles.css'
interface contactProps{
  id:number,
  contact:string,
  phone:string,
  onHandel:any

}

const ContactCard:React.FC<contactProps> = ({contact, phone, id, onHandel})=> {

  const  handleDelete = ()=>{
    onHandel(id);

    
  }


   return (
    <div className="card">
      <h1 className='margin-top'>{contact}</h1>
      <h2 className='margin-top'>{phone}</h2>

      <button onClick={handleDelete}>Block</button>
    </div>
  )
}

export default ContactCard;
