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
            <div className="mt-4">
              <p className="font-bold text-xl">{post.title}</p>
              <p className="italic">By {post.author} <span className="not-italic"> on </span> <span className="underline font-bold not-italic">{post.category} </span></p>
              <p>{`Posted On ${post.date}`}</p>
              <p className="mt-6 mb-3">{post.content}</p>
              <div>
                {post.tags.map((tag) => {
                  return <span className="underline text-blue-500 font-bold ">{` #${tag}`}</span>;
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
