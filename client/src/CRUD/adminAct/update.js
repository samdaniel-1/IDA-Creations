import axios from "axios";
import { useEffect, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Userpanel from "../panel/userPanel";
import Adminpanel from "../panel/adminPanel";

function Update(){
    const {proid} = useParams()
    const [name,setName] = useState()
    const [age,setAge] = useState()
    const [clas,setClas] = useState()
    const [number,setNumber] = useState()
    const [organname,setOrganname] = useState()
    const [nationality,setNationality] = useState()
    const [comments,setComments] = useState()
    

    const nav = useNavigate()

    useEffect(()=>{
        let url = "http://localhost:23455/edit/"+proid
        axios.get(url).then((res)=>{
            setName(res.data.name)
            setAge(res.data.age)
            setClas(res.data.clas)
            setNumber(res.data.number)
            setOrganname(res.data.organname)
            setNationality(res.data.nationality)
            setComments(res.data.comments)
        })
    },[])

    
    const handler = (e) =>{
        e.preventDefault()

    let url = "http://localhost:23455/update/"+proid
    let key = {
        name:name,
        age:age,
        clas:clas,
        number:number,
        organname:organname,
        nationality:nationality,
        comments:comments
    }
    axios.put(url,key)
    .then(res=>{
        if(res.data.status==="updated"){
            console.log(res.data)
            alert("updated")
            nav("/admin/read")
        }
        else{
            alert("Not updated")
        }
    })
    }
    return(
 <>
 <Form className="p-5" onSubmit={handler}>
    <FloatingLabel label="name" className="mb-3">
    <Form.Control type="text" placeholder="name" value={name} onChange={e=>setName(e.target.value)}/>
    </FloatingLabel>
    <FloatingLabel label="age" className="mb-3">
    <Form.Control type="text" placeholder="age" value={age} onChange={e=>setAge(e.target.value)}/>
    </FloatingLabel>
    <FloatingLabel label="type" className="mb-3">
    <Form.Control type="text" placeholder="type" value={clas} onChange={e=>setClas(e.target.value)}/>
    </FloatingLabel>
    <FloatingLabel label="number" className="mb-3">
    <Form.Control type="text" placeholder="number" value={number} onChange={e=>setNumber(e.target.value)}/>
    </FloatingLabel>
    <FloatingLabel label="organization name" className="mb-3">
    <Form.Control type="text" placeholder="organname" value={organname} onChange={e=>setOrganname(e.target.value)}/>
    </FloatingLabel>
    <FloatingLabel label="nationality" className="mb-3">
    <Form.Control type="text" placeholder="nationality" value={nationality} onChange={e=>setNationality(e.target.value)}/>
    </FloatingLabel>
    <FloatingLabel label="textarea" className="mb-3">
    <Form.Control as="textarea" type="text" placeholder="comments" value={comments} onChange={e=>setComments(e.target.value)}/>
    </FloatingLabel>
    
    <input className="btn btn-success m-5" type="submit" value="submit"/>
    </Form>
    <div className="panel d-flex">
    <Userpanel/>
    <Adminpanel/>
    </div>
</>
    )
}

export default Update