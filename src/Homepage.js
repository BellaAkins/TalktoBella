import { useEffect, useState } from "react";
import BlogList from "./Bloglist";

const Homepage = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Welcome to my new website. I hope you enjoy your stay!",
      author: "Bella",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "Join us this Saturday for a welcome party at my house!",
      author: "TioluwaLope",
      id: 2,
    },
    {
      title: "The best burger in town",
      body: "Come try the best burger in town at Joe's Burgers!",
      author: "TioluwaLope",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((singleBlog) => singleBlog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("it worked");
  });
  return (
    <div className="homepage ">
      <div className="blogheader">
        {<h1>Welcome to my Blog</h1>}
        {
          <p>
            Here you can find all the latest and greatest blog posts on the
            internet. Whether you are interested in technology, sports, or
            entertainment, we have something for you. you can also add your own
            blog post by clicking the button below.
          </p>
        }
      </div>

      <div className="blog-preview">
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        {/* <BlogList
          blogs={blogs.filter(
            (singleBlog) => singleBlog.author === "TioluWaLope"
          )}
          title="Bella Blogs"
        /> */}
      </div>
    </div>
  );
};

export default Homepage;
