import Sidebar from "./Sidebar";
import Chat from "./Chat";
import './App.css';
import Header from "./fakeShop/Haeder";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ProductListing from "./fakeShop/productList";
import ProductDetail from "./fakeShop/productDeatail";
import ClassApp from "./classbased-component/classApp";
import { IoLogoNodejs } from "react-icons/io";
import Assignment from "./Components/assignment";

function App() {
  return (
     <>
<h1>hello</h1>
<Assignment/>
     {/* <Header/>
     <Router>
       <Routes>
         <Route path="/" element={<ProductListing/>}/>
         <Route path="/product/:productId" element={<ProductDetail/>}/>
         <Route>404 error found</Route>
       </Routes>
     </Router> */}

     </>



    // <div className="App">
     
    //  <div className="App_body">
    //    <Sidebar/>
    //    {/* sidebar */}
    //     <Chat/>
    //    {/* chatbar */}
    //  </div>
    // </div>
  );
}

export default App;
