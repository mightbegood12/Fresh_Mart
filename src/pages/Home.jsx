import React from "react";
import Navbar from "../components/Navbar";
import ImageSlicer from "../components/ImageSlicer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ImageSlicer />
    </div>
  );
}
