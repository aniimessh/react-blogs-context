import React, { useContext } from "react";
import { appContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Blogs() {
  const { posts, loading } = useContext(appContext);
  return (
    <div className="w-[40%] mx-auto">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => {
          return (
            <div>
              <p className="font-bold text-xl">{post.title}</p>
              <p>{`By ${post.author} on ${post.category}`}</p>
              <p>{`Posted On ${post.date}`}</p>
              <p>{post.content}</p>
              <div>
                {post.tags.map((tag) => {
                  return <span className="tags">{`#${tag}`}</span>;
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Blogs;
