
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
const [Movie,setMovie]=useState({
  MovieName:'',
  MovieReleaseYear:'',
  MovieCategory:'',
  MovieDirector:'',
  MovieLanguage:''
})

let fetchValue=(e)=>{
  
  //console.log(e)
  setMovie({...Movie,[e.target.name]:e.target.value})
  
  
  }
  let sendData=()=>{
    console.log(Movie)
    
    
    }
    






  return (
    <>
    <h3 style={{backgroundColor:'black', color:'white' ,fontFamily:'monospace'}}>NEW MOVIE</h3>
    <TextField
     id="standard-basic" 
     label="Movie Name"
      variant="standard"
      name="MovieName"
      onChange={fetchValue}
       />
       <br />
    <TextField
     id="standard-basic"
      label="Movie Release year"
       variant="standard"
        name="MovieReleaseYear"
        onChange={fetchValue}
        />
        <br />
    <TextField
     id="standard-basic" 
     label="Movie Category"
      variant="standard"
       name="MovieCategory"
       onChange={fetchValue}
       />
       <br />
    <TextField
     id="standard-basic"
      label="Movie Language"
       variant="standard" 
        name="MovieLanguage"
        onChange={fetchValue}
       />
       <br />
    <TextField 
    id="standard-basic"
     label="Movie Director" 
     variant="standard" 
     name="MovieDirector"
     onChange={fetchValue}
     />
     <br />
               <br />
                <Button style={{ backgroundColor: 'black'}} variant="contained" onClick={sendData}>Submit</Button>

            


    </>
  )
}

export default Add