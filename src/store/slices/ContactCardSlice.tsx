import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Contact {
id: number,
name: string,
number: string
}


interface ContactState {
  contacts:Contact[],
  inputVals: {
    field1: string;
    field2: string;
  };
} 

const initialState: ContactState = {
  contacts:[],
  inputVals: {
    field1: '',
    field2: ''
  },
}

const ContactCardSlice = createSlice({
name: "contact",
initialState,

reducers:{
  updateValue:(state,action:PayloadAction <{name:string; value:string}>)=>{
state.inputVals[action.payload.name] = action.payload.value;
  },

  addDataToContact:(state)=>{
    const newContact= {
      id:Date.now(),
      name:state.inputVals.field1,
      number: state.inputVals.field2
    }
  state.contacts.push(newContact)
  },

  handleDel:(state,action)=>{
    debugger;
    state.contacts= state.contacts.filter(data=>data.id !== action.payload)
  }


}

})

export const {updateValue, addDataToContact, handleDel} = ContactCardSlice.actions

export default ContactCardSlice.reducer;