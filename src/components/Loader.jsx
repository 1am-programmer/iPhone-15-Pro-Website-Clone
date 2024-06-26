import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => {
  return(
    <Html>
        <div  className="absolute top-0 left-0 w-full h-full    flex justify-center items-center"  >
<div    className="w-[10w] h-[10w] rounded-full">
    Loading...
</div>
        </div>
    </Html>
  )
};

export default Loader;
