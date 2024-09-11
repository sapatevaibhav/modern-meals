import React from "react";
import "./Skeleton.css";

const Skeleton = ({ height }) => {
  return (
    <div className="skeleton">
      <div className="skeleton-image" style={{ height }}></div>
    </div>
  );
};

export default Skeleton;
