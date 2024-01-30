import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navs from "./components/Navs";
import AppPosts from "./pages/AppPosts";

function App() {
  return (
    <Router>
      <Navs />
      <Routes>
        <Route path="/" element={<Navigate to={"/posts"} />} />
        <Route path="/posts" element={<AppPosts />} />
      </Routes>
    </Router>
  );
}

export default App;
