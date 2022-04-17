import "./profilepage.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
import ProfilePageAdmin from "../../components/profile_admin/ProfilePageAdmin"



const Profilepage = () => {
  return (
    <div className="adminprofile">
      <Sidebar/>
      <div className="adminprofileContainer">
        <Navbar/>
        
        <div class="content">
         <ProfilePageAdmin/> 
         </div>
      </div>
    </div>
  )
}

export default Profilepage;