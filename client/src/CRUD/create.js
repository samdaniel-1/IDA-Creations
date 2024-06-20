import axios from "axios"
import { FloatingLabel, Form } from "react-bootstrap"

function Create()
    {
    const handletest = (e) => {
    e.preventDefault()
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let clas = document.getElementById("class").value
    let number = document.getElementById("number").value
    let organname = document.getElementById("organname").value
    let nationality = document.getElementById("nationality").value
    let comments = document.getElementById("comments").value


    let key = {
      name:name,
      age:age,
      clas:clas,
      number:number,
      organname:organname,
      nationality:nationality,
      comments:comments
    }
    let url = "http://localhost:23455/create"
    axios.post(url,key)
    .then(res=>{
      if(res.data.status === "inserted"){
        alert("Items inserted")
        window.location.href = "/"
      }
      else{
        alert("Can't insert")
      }
    })
  }
  return (
    <>
    <Form className="p-5" onSubmit={handletest}>
    <h1 className="title text-center">Enter your details here</h1>
    <FloatingLabel label="Enter your name" className="mb-3">
    <Form.Control type='text' id='name' placeholder='name'/>
    </FloatingLabel>

    <FloatingLabel label="Select your type i.e csr, individual, corporate etc." className="mb-3">
    <Form.Control type='text' id='class' placeholder='Select your type i.e csr, individual, corporate etc.'/>
    </FloatingLabel>

    <FloatingLabel label="Enter your age" className="mb-3">
    <Form.Control type='text' id='age' placeholder='age'/>
    </FloatingLabel>

    <FloatingLabel label="Enter your phonenumber" className="mb-3">
    <Form.Control type="text" id="number" placeholder="Phonenumber"/>
    </FloatingLabel>

    <FloatingLabel label="type your organization, if not leave this empty" className="mb-3">
    <Form.Control type="text" id="organname" placeholder="type your organization, if not leave this empty"/>
    </FloatingLabel>

    <FloatingLabel label="Enter your nationality" className="mb-3">
    <Form.Control type="text" id="nationality" placeholder="Type your nationality"/>
    </FloatingLabel>
    <FloatingLabel label="Type the brief introductions of yours and where you're working purposes so that we could know more about you" className="mb-3">
    <Form.Control as="textarea" id="comments" placeholder="Type the brief introductions of yours and where you're working purposes so that we could know more about you"/>

    </FloatingLabel>

    <input className="btn btn-success m-5" type='submit' value="submit"/>
    </Form>
    </>
  );
}

export default Create