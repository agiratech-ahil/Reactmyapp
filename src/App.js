import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Blog from "./Blog";
import App from "./App";

function Heading() {
  return (
    <div className="top">
      <h1>The Right plan For Your Business</h1>
      <p>
        We have several powerful plans to showcase your business and get
        discovered <br></br> as a creative enterpreneurs.Everything you need.{" "}
      </p>
    </div>
  );
}

const posts = [
  {
    id: 1,
    title: "Intro",
    dis: "Save $10",
    features: [
      {
        name: "Upload Video up to 720p Resolution",
        isAvailable: true,
      },
      { name: "Attachment & Post Scheduling", isAvailable: false },
      { name: "Set your rates ", isAvailable: false },
      { name: "Exclusive deals", isAvailable: false },
      { name: "Advanced Statistics", isAvailable: false },
    ],
    list1: "Upload Video up to 720p Resolution ",
    list2: "Attachment & Post Scheduling",
    list3: "Set your rates ",
    list4: "Exclusive deals",
    list5: "Advanced Statistics",
  },
  {
    id: 2,
    title: "Base",
    dis: "Save $15",
    features: [
      {
        name: "Upload Video up to 720p Resolution",
        isAvailable: true,
      },
      { name: "Attachment & Post Scheduling", isAvailable: true },
      { name: "Set your rates ", isAvailable: false },
      { name: "Exclusive deals", isAvailable: false },
      { name: "Advanced Statistics", isAvailable: false },
    ],
    list1: "Upload Video up to 720p Resolution",
    list2: "Attachment & Post Scheduling",
    list3: "Set your rates ",
    list4: "Exclusive deals",
    list5: "Advanced Statistics",
  },
  {
    id: 3,
    title: "Pro",
    dis: "Save $40",
    features: [
      {
        name: "Upload Video up to 720p Resolution",
        isAvailable: true,
      },
      { name: "Attachment & Post Scheduling", isAvailable: true },
      { name: "Set your rates ", isAvailable: true },
      { name: "Exclusive deals", isAvailable: true },
      { name: "Advanced Statistics", isAvailable: false },
    ],
    list1: "Upload Video up to 720p Resolution",
    list2: "Attachment & Post Scheduling",
    list3: "Set your rates ",
    list4: "Exclusive deals",
    list5: "Advanced Statistics",
  },
  {
    id: 4,
    title: "Enteprise",
    dis: "Save $20",
    features: [
      {
        name: "Upload Video up to 720p Resolution",
        isAvailable: true,
      },
      { name: "Attachment & Post Scheduling", isAvailable: true },
      { name: "Set your rates ", isAvailable: true },
      { name: "Exclusive deals", isAvailable: true },
      { name: "Advanced Statistics", isAvailable: true },
    ],
    list1: "Upload Video up to 720p Resolution",
    list2: "Attachment & Post Scheduling",
    list3: "Set your rates ",
    list4: "Exclusive deals",
    list5: "Advanced Statistics",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Heading />
    {posts.map((post, i) => {
      return <Blog posts={post} key={i} />;
    })}
  </div>
);

export default App;
