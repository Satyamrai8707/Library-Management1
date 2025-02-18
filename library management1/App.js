import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import HomePage from './components/HomePage';
import AdminDashboard from './components/AdminDashboard';
import NotFound from './components/NotFound';
import Singup from './components/Singup';
import UserDashboard from './components/Userdashboard';
import TransactionPage from './components/TransactionPage';
import BookAvailab from './components/BookAvailab';
import SearchResult from './components/SearchResult';
import Bookissue from './components/Bookissue';
import Returnbook from './components/Returnbook';
import PayFine from './components/PayFine';
import Report from './components/Report';
import MasterList from './components/MasterList';
import Movies from './components/Movies';
import Membership from './components/Membership';
import Active from './components/Active';
import Overdue from './components/Overdue';
import Issue from './components/Issue';
import Maintenane from './components/Maintenance';
import Update from './components/Update';
import Addmem from './components/Addmem';
import Updatemem from './components/Updatemem';
import AddBook from './components/Addbook';
import UpdateBook from './components/UpdateBook';
import UserManage from './components/UserManage';
import Cancel from './components/Cancel';
import Success from './components/Success';
import Logout from './components/Logout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Home route */}
        <Route path="/Singup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path='/login/dashboard' element={<UserDashboard/>} />
        <Route path='/Transactionpage' element={<TransactionPage/>} />
        <Route path='/login/dashboard' element={<UserDashboard/>} />
        <Route path='/BookAvailab' element={<BookAvailab/>} />
        <Route path='/SearchResult' element={<SearchResult/>} />
        <Route path='/Bookissue' element={<Bookissue/>} />
        <Route path='/Returnbook' element={<Returnbook/>} />
        <Route path="/PayFine" element={<PayFine />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/MasterList" element={<MasterList />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Active" element={<Active />} />
        <Route path="/Overdue" element={<Overdue />} />
        <Route path="/Issue" element={<Issue />} />
        <Route path="/Maintenance" element={<Maintenane />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/Addmem" element={<Addmem />} />
        <Route path="/Updatemem" element={<Updatemem />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/UpdateBook" element={<UpdateBook />} />
        <Route path="/UserManage" element={<UserManage />} />
        <Route path="/Cancel" element={<Cancel />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Logout" element={<Logout />} />




        <Route path="*" element={<NotFound />} />  {/* 404 page */}
      </Routes>
    </Router>
  );
}

export default App;
