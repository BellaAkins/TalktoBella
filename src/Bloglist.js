const BlogList = ({ blogs, title }) => {
  return (
    <div className="bloglist">
      <h2>{title}</h2>
      {blogs.map((singleBlog) => (
        <div className="blog-preview" key={singleBlog.id}>
          <h2>{singleBlog.title}</h2>
          <p>A Blog by {singleBlog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
