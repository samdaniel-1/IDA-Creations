import { Link } from "react-router-dom";

function Adminpanel(){
    return(
<>
<Link to={'/admin/read/'} className="btn btn-warning m-5">Adminpanel</Link>
</>
    );
}
export default Adminpanel
