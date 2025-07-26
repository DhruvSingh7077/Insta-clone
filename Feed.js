// src/components/Feed.js
import React from 'react';
import Post from './post';

const dummyPosts = [
  {
    user: { name: 'john_doe', avatar: 'https://i.pravatar.cc/40?img=1' },
    image: 'https://source.unsplash.com/random/600x400?nature',
    caption: 'Beautiful view from the mountains!',
  },
  {
    user: { name: 'jane_smith', avatar: 'https://i.pravatar.cc/40?img=2' },
    image: 'https://source.unsplash.com/random/600x400?beach',
    caption: 'Chilling by the beach 🏖️',
  },
];

const Feed = () => {
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

      {/* Posts */}
      {dummyPosts.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </div>
  );
};

export default Feed;
