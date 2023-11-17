import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import News from './components/news/news';
import LoginComponent from './components/login/Login';
import Scroll from './components/scroll/scroll';
import { Route, Routes } from 'react-router-dom';
import ShowNews from './components/news/showNew';
import AdminSideBar from './components/admin Panel/sidebar/adminSidebar';
import Articles from './components/admin Panel/articles/article';
import AddJob from './components/admin Panel/add job/AddJob';
import AdminPanel from './components/admin Panel/adminPanel';
import CvShape from './components/cv/cv view/cvSahpe';
import Coursedeatels from './components/Coursedeatels/Coursedeatels';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PersonalPage from './components/welcome/personalPage';
import AddUser from './components/admin Panel/add users/addUser';
import Jobs from './components/jobPage studentPortal/findJob';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      {/* <AdminSideBar/> */}
      {/* <AdminPanel/> */}
      {/* <Jobs/> */}
      {/* <Coursedeatels/> */}
      {/* <CvShape /> */}
      {/* <Articles/> */}
      {/* <AddJob /> */}
      {/* <PersonalPage/> */}
      {/* <AddUser/> */}
    </div>
       <Routes>
       {/* <Route path='/' element={<CvS  hape/>}/> */}
       <Route path='/showNews' element={<ShowNews/>}/>
       <Route path='/about' element={<News/>}/>
       <Route path='/business' element={<News/>}/>
       <Route path='/security' element={<News/>}/>
       <Route path='/sports' element={<News/>}/>
       <Route path='/medical' element={<News/>}/>
       <Route path='/startups' element={<News/>}/>
       <Route path='/apps' element={<News/>}/>
       <Route path='/jobs' element={<Jobs/>}/>
       <Route path='/adminPanel' element={<AdminPanel/>}/>
    
      </Routes>
      <Scroll />
      </>
  );
}

export default App;
