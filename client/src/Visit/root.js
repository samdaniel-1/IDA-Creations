import { BrowserRouter,Route,Routes } from "react-router-dom";
import Create from "../CRUD/create";
import Read from "../CRUD/adminAct/read"
import Update from "../CRUD/adminAct/update";
import Delete from "../CRUD/adminAct/delete";
import Single from "../UserComponents/single";


function Root(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Single/>}/>
            <Route path="/contact" element={<Create/>}/>
            <Route path="/admin/read" element={<Read/>}/>
            <Route path="/admin/edit/:proid" element={<Update/>}/>
            <Route path="/admin/delete/:proid" element={<Delete/>}/>
            

        </Routes>
        </BrowserRouter>
    )
}

export default Root