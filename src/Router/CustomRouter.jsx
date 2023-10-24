import { Route, Routes } from "react-router-dom";
import {Checklist} from "../components/Checklist"
import {Trust} from "../components/Trust"

function CustomRouter() {
     return(

          <Routes>
               <Route path="/Checklist" element={<Checklist/>}/>
               <Route path="/trust" element={<Trust/>}/>
          </Routes>
     )
     
}
export default CustomRouter
