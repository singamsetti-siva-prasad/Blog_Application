import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Blogs from "./pages/blogs/Blogs";
import About from "./pages/about/About";
import SingleBlog from "./pages/singleBlog/SingleBlog";
import CreateBlog from "./pages/createBlog/CreateBlog";
import NewsLetter from "./pages/newsLetter/NewsLetter";

function App() {
  return (
    <div className="App">
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs/:blogId" element={<SingleBlog />} />
            {/* <Route path="/signup" element={user ? <Home /> : <SignUp />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />{" "} */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />{" "}
            <Route path="/newsletter" element={<NewsLetter />} />
            <Route path="/createblog" element={<CreateBlog />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
