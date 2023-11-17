import { Link } from 'react-router-dom';
import './AdminSideBar.css'
import { useState } from 'react';
function AdminSideBar(){
  const [cirtificateBtn ,setCertifiCateeBtn] = useState(false)
    return(
        <div class="users-sec" style={{transform:'translateY(50px)'}}>
        <div> 
          <h5 onClick={()=>setCertifiCateeBtn(false)}><Link to="/adminPanel/users">Users</Link></h5>

            {/*  */}
          <div class="lg-ul">
            <ul>
            <li><Link to="#">Admins</Link></li>
            <li><Link to="#">Editors</Link></li>
            <li><Link to="#">Instructors</Link></li>
            <li onClick={()=>setCertifiCateeBtn(true)}><Link to="/adminPanel/userstudents">Students</Link></li>
          </ul>
          </div>
        </div>


        <div>
          <h5 onClick={()=>setCertifiCateeBtn(false)}><Link to="/adminPanel/articles">Articles</Link></h5>
            
          <div class="lg-ul">
            <ul>
            <li><Link to="">Published Articles</Link></li>
            <li><Link to="">Scheduled Articles</Link></li>
            <li><Link to="">Saved Drafts</Link></li>
          </ul>
          </div>
        </div>

        <div>
          <h5 onClick={()=>setCertifiCateeBtn(false)}><Link to="/adminPanel/Jops">Jops</Link></h5>
        
          <div class="lg-ul">
            <ul>
            <li><Link to="">Published Jops</Link></li>
            <li><Link to="">Saved Drafts</Link></li>
          </ul>
          </div>
        </div>

        <div>
          <h5 onClick={()=>setCertifiCateeBtn(false)}><Link to="/adminPanel/courses">Courses</Link></h5>
            
          <div class="lg-ul">
             <ul>
            <li><Link to="">Published Courses</Link></li>
            <li><Link to="">Scheduled Courses</Link></li>
            <li><Link to="">Saved Drafts</Link></li>
          </ul>
          </div>
        </div>
        {
          cirtificateBtn ?<Link to="/adminPanel/addCertificate" > <button className='bg-warning btn text-light w-100'> Add Certificate</button></Link>:''
        }

      </div>
    )
}
export default AdminSideBar;