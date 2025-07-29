
import React, { useEffect, useState, useContext } from "react";
import Post from './post';
import { AuthContext } from "../context/AuthContext";


const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   
  const { token } = useContext(AuthContext); // for protected routes

    useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/posts/all", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}` // include only if required
          }
        });

        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        setPosts(data);
           } catch (err) {
        console.error(err);
        setError("Could not load feed.");
      } finally {
        setLoading(false);
      }
    };

    
    fetchPosts();
  }, [token]);


  return (
    <div className="pt-4 px-2">
      {/* Stories */}
      <div className="d-flex overflow-auto mb-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="text-center me-3">
            <img
              src={`https://i.pravatar.cc/50?img=${i + 3}`}
              alt="story"
              className="rounded-circle border border-danger"
              width="60"
              height="60"
            />
            <p className="small mt-1">user{i + 1}</p>
          </div>
        ))}
      </div>

       {/* Posts Section */}
      {loading && <p>Loading feed...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && posts.length === 0 && <p>No posts found.</p>}

      {posts.map((post) => (
        <Post
          key={post._id}
          user={{ name: post.userId || "unknown", avatar: "https://i.pravatar.cc/40" }}
          image={post.image}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Feed;