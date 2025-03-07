const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="bloglist">
      <h2>{title}</h2>
      {blogs.map((singleBlog) => (
        <div className="blog-preview" key={singleBlog.id}>
          <h2>{singleBlog.title}</h2>
          <p>A Blog by {singleBlog.author}</p>
          <button onClick={() => handleDelete(singleBlog.id)}>
            Delete Blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
