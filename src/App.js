
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comments from "./pages/comments";
import Posts from "./pages/posts";

function App() {
  return (
      <Router>
        <Routes>
            <Route
                path = "/"
                exact
                element = {<Posts/>}
            />

        <Route
                path = "/Comments"
                element = {<Comments/>}
            />
        </Routes>
        
      </Router>
  );
}

export default App;

