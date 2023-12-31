import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";
import HomePage from "./pages/HomePage";


function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
