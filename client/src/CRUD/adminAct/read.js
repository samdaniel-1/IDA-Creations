import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Userpanel from "../panel/userPanel"

function Read(){
    

    const [data,setData] = useState([])
    useEffect(()=>{
        let url = "http://localhost:23455/read"
        axios.get(url).then(res=>{
            setData(res.data)
        })
    },[])
    return(
        <>
        <div>
            <h1 className="text-center">Entire datas</h1>
        <table className="m-5">
            <thead className="t">
                <tr className="t">
                <th className="t">name</th>
                <th className="t">type</th>
                <th className="t">age</th>
                <th className="t">Phone number</th>
                <th className="t">Organisation name</th>
                <th className="t">Nationality</th>
                <th className="t">Comments</th>
                <th className="t">update</th>
                <th className="t">delete</th>
                </tr>
            </thead>
            
        {
            data.map((val,ind)=>{
                return(
                    <tbody className="t" key={ind}>
                       <tr className="t">
                       <td className="t"> {val.name} </td>
                       <td className="t"> {val.clas} </td>
                       <td className="t">{val.age}</td>
                       <td className="t"> {val.number} </td>
                       <td className="t"> {val.organname} </td>
                       <td className="t"> {val.nationality} </td>
                       <td className="t"> {val.comments} </td>

                       <td className="t"><Link to ={`/admin/edit/${val._id}`}>Update<span style={{textDecoration:"none"}}> </span></Link></td> 
                       <td className="t"><Link to ={`/admin/delete/${val._id}`}><span style={{textDecoration:"none"}}> </span>Delete</Link></td>
                       </tr>
                    </tbody>
                    
                )
            })
        }
        </table>
        <Userpanel/>
        </div>
        </>
    )
}

export default Read