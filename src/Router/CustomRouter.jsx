import { Route, Routes } from "react-router-dom";
import {Checklist} from "../components/Checklist"
import {Trust} from "../components/Trust"
import {ReferEarn} from "../components/ReferEarn"
import {ContactUs} from "../components/ContactUs"
import {Policy} from "../components/Policy"
import {GoCHireSupport} from "../components/GoCHireSupport"
import {ListOfFakeUniversitie} from "../components/ListOfFakeUniversitie"
import {OnlineBca} from "../components/OnlineBca"
import {Register} from "../pages/Register"
import { ThankYou } from "../pages/ThankYou";

function CustomRouter() {
     return(
          <Routes>
               <Route path="/Checklist" element={<Checklist/>}/>
               <Route path="/trust" element={<Trust/>}/>
               <Route path="/referEarn" element={<ReferEarn/>}/>
               <Route path="/policy" element={<Policy/>}/>
               <Route path="/contactus" element={<ContactUs/>}/>
               <Route path="/ListOfFakeUniversities" element={<ListOfFakeUniversitie/>}/>
               <Route path="/job-hire" element={<GoCHireSupport/>}/>
               <Route path="/Online-Bca" element={<OnlineBca/>}/>
               <Route path="/register" element={<Register/>}/>
               <Route path="/thankyou" element={<ThankYou/>}/>
          </Routes>
     )
     
}
export default CustomRouter
