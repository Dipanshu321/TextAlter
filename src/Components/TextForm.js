import React, {useState} from 'react'

export default function TextForm(props) {

  // FOR UPPERCASE BUTTON 
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText (newText)
    props.showAlert("Converted to UpperCase !","Success");
  }
  
  // FOR LOWERCASE BUTTON 
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText (newText)
    props.showAlert("Converted to LowerCase !","Success");
  }
  
  // FOR COPY BUTTON 
  const handlecopyClick = ()=>{
    let text = document.getElementById("TextBox");
    text.select();
    text.setSelectionRange (0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copy to clipboard !","Success");
  }
  
  // FOR REMOVE EXTRA SPACE BUTTON 
  const handleExtraSpaces = ()=>{
    let newText= text.split(/[  ]+/);
    setText (newText.join(" "))
    props.showAlert("Extra Spaces removed !","Success");
  }
  
  // FOR ERASE ALL BUTTON 
  const handleEraseAll = ()=>{
    let newText = '';
    setText(newText)
    // document.getElementById("TextBox").value = '';
    props.showAlert("All Text cleared !","Success");
  }
  
  
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <div>
        <div className="mb-3 my-4" style={{color: props.Mode==='warning'?'black':'white'}}>
            <h4>{props.heading}</h4>
            {/* <label for="exampleFormControlTextarea1" className="form-label">Enter Your Text Here</label> */}
            
            <textarea className="form-control" id="TextBox" value={text} onChange={handleOnChange} rows="10" cols="8" style={{backgroundColor: props.Mode==='warning'?'white':'rgb(19 77 123) ', color: props.Mode==='warning'?'black':'white'}}></textarea>
            
            <button disabled={text.length===0} className= "btn btn-primary my-2" onClick={handleUpClick}>Convert To UpperCase</button>
           
            <button disabled={text.length===0} className= "btn btn-primary my-2 mx-1" onClick={handleLowClick}>Convert To Lower Case</button>
            
            <button disabled={text.length===0} className= "btn btn-primary my-2 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
            <button disabled={text.length===0} className= "btn btn-primary my-2 mx-1" onClick={handlecopyClick}>Copy</button>
            
            <button disabled={text.length===0} className= "btn btn-primary my-2 mx-1" onClick={handleEraseAll}>Erase All</button>
        </div>
        <div className="container" style={{color: props.Mode==='warning'?'black':'white'}}>
          <h4>Your Text Summary</h4>
          
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
          {/* filter((element)=>{return element.length!==0}).length} ---> agar hum apne textbox me kuch nhi likh rhe the aur fir bhi preview me 1 word show kr rha tha to uss issue ko hi fix krne ke liye ye "FILTER" method humne yha use kiya hai. */}
          
          <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
          
          <h2>Preview</h2>
          
          <p>{text.length>0?text:"Enter Something in the above Textbox to Preview it here."}</p>
        </div>
    </div>
  )
}
