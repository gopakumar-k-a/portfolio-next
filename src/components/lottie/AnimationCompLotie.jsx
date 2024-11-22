"use client";
import Lottie from "lottie-react";
import animationData from "../../../public/lottie/Animation - 1732184285094.json";

export default function AnimationComponent() {
  return (
    <Lottie animationData={animationData} style={{ width: 300, height: 300 }} />
  );
}
