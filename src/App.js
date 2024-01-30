import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navs from "./components/Navs";
import AppPosts from "./pages/AppPosts";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <Router>
      <Navs />
      <Routes>
        <Route path="/" element={<Navigate to={"/posts"} />} />
        <Route path="/posts" element={<AppPosts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/add" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;
