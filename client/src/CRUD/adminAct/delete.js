import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"
import { Modal,Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function Delete(){
    const nav = useNavigate()
    const {proid} = useParams()

    const hande =() => {
        let url = "http://localhost:23455/delete/"+proid
                        axios.delete(url)
                        .then(res=>{
                            if(res.data.status==="deleted")
                                {
                                    alert("Deleted Successfully")
                                    nav("/admin/read")
                                }
                        })
    }

    return(
        <>
        <div className="modal show" style={{display:"block",position:'initial'}}>
    <Modal.Dialog className="text-center rounded-3" style={{boxShadow:"1px 1px 5px grey",marginTop:"20%"}}>
        <Modal.Body>
            <p><b>Are you sure to delete?</b></p>
        </Modal.Body>

        <div className="m-2">
        <Button style={{background: "#22C53C"}} className="col-5 m-3 border-light" onClick={hande}>Yes</Button>
        <Link to="/admin/read/"><Button style={{background: "#C55322"}} className="col-5 border-light">No</Button></Link>
        </div>
    </Modal.Dialog>
     </div>
        </>
    )
}

export default Delete
