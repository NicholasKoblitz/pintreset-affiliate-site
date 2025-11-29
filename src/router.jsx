import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import About from "./pages/About";

export default function Router() {
  return (
    <>
      <nav style={{ padding: 20, background: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
        <Link to="/" style={{ marginRight: 20 }}>Home</Link>
        <Link to="/blog" style={{ marginRight: 20 }}>Blog</Link>
        <Link to="/about">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
