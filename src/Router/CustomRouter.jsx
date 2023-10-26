import { Route, Routes } from "react-router-dom";
import {Checklist} from "../components/Checklist"
import {Trust} from "../components/Trust"
import {ReferEarn} from "../components/ReferEarn"

function CustomRouter() {
     return(

          <Routes>
               <Route path="/Checklist" element={<Checklist/>}/>
               <Route path="/trust" element={<Trust/>}/>
               <Route path="/referEarn" element={<ReferEarn/>}/>
          </Routes>
     )
     
}
export default CustomRouter
