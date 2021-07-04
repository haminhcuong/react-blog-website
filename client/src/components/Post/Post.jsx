import React from "react";
import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="post-img"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="post-infor">
        <div className="post-categories">
          <div className="category">Music</div>
          <div className="category">Life</div>
        </div>
        <span className="post-title">Lorem ipsum dolor, sit amet.</span>
        <hr />
        <div className="post-date">1 hour ago</div>
      </div>
      <div className="post-desc">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          veritatis itaque laudantium eum nihil ea aliquid totam commodi
          necessitatibus. Culpa eius commodi quos! Fuga laborum aspernatur ullam
          delectus, obcaecati saepe. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aut, reprehenderit vel similique commodi quod et
          maxime iste dolor, eius saepe ex unde adipisci aspernatur esse dolorum
          cumque, inventore veritatis voluptatem.
        </p>
      </div>
    </div>
  );
}
