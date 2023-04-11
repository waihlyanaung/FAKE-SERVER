import React from 'react'
import { useGetBlogsQuery } from '../feature/blog'
import BlogCard from './BlogCard';

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();
  console.log(blogs);
  return (
    <div>
      {blogs?.map((blog) => {
        return <BlogCard key={blog.id} blog={blog} />;
      })}
    </div>

  )
}

export default Blogs