import BlogList from "./Bloglist";
import useFetch from "./usefetch";

const Homepage = () => {
  const {
    myData: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="homepage ">
      <div className="blogheader">
        {<h1>Welcome to my Blog</h1>}
        {
          <p>
            Here you can find all the latest and greatest blog posts on the
            internet. Whether you are interested in technology, sports, or
            entertainment, we have something for you. you can also add your own
            blog post by clicking the button .
          </p>
        }
      </div>

      <div className="blog-preview">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      </div>
    </div>
  );
};

export default Homepage;
