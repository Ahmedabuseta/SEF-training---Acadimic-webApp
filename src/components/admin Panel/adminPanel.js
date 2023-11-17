import { Route, Routes } from "react-router-dom"
import Title from "../title/title"
import AddCertificateDetails from "./add certificate/Add_Certificate_Details"
import Articles from "./articles/article"
import AdminSideBar from "./sidebar/adminSidebar"
import Jobs from "./jobs/Jobs"
import Cousrses from "./courses/Courses"
import UserStudents from "./users-students/UsersStudents"
import Users from "./users/Users"
import Footer from "../footer/Footer"
import AddJob from "./add job/AddJob"
import AddCourses from "./add courses/addCourses"
import AddArticles from "./add articles/AddArtciles"
import Applications from "./application/application"
import AddUser from "./add users/addUser"

function AdminPanel(){

    return(
        <>
        <div className="container text-start d-block me-auto" >
            <Title title={'Admin Panel'} />
        </div>
        <div className="container d-flex flex-row gap-4 w-100 mt-5"> 
            <div className="col-lg-3 flex-shrink-0" >
                <AdminSideBar  />
            </div>
            <div className="col-lg-9 ">
                {/* <AddJob/> */}
                {/* <AddCourses/> */}
                {/* <AddArticles/> */}
                {/* <Applications/> */}
                <Articles/>
                {/* <AddUser/> */}
                <Routes>

                    <Route path="/adminPanel/articles" element={<Articles/>} />
                    <Route path="/adminPanel/addarticles" element={<AddArticles/>} />
                    <Route path="/adminPanel/Jops" element={<Jobs/>} />
                    <Route path="/adminPanel/addJobs" element={<AddJob/>} />
                    <Route path="/adminPanel/addCertificate" element={<AddCertificateDetails/>} />
                    <Route path="/adminPanel/courses" element={<Cousrses/>} />
                    <Route path="/adminPanel/addCourses" element={<AddCourses/>} />
                    <Route path="/adminPanel/users" element={<Users/>} />
                    <Route path="/adminPanel/addUsers" element={<AddUser/>} />
                    <Route path="/adminPanel/application" element={<Applications/>} />
                    <Route path="/adminPanel/userstudents" element={<UserStudents/>} />
                </Routes>
                {/* <AddCertificateDetails /> */}
                {/* <Articles/> */}
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default AdminPanel