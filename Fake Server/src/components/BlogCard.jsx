import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteBlogMutation } from '../feature/blog';


const BlogCard = ({ blog }) => {


  const [deleteBlog] = useDeleteBlogMutation();

  const delBtn = () => {
    console.log();
  }
  return (
    // <div>
    //   <div className=" w-64 p-5 shadow-lg rounded-lg flex flex-col">
    //     <img
    //       src={blog?.img}
    //       className="mb-4 h-[150px] object-cover rounded-lg"
    //       alt=""
    //     />
    //     <div>
    //       <p className=" mb-2 ">{blog?.title}...</p>
    //       <p className=" mb-2 ">{blog?.desc}...</p>

    //       <Link
    //         to={`/blogs/${blog?.id}`}>
    //         <button className=" px-5 py-1 bg-gray-700 text-white rounded-lg shadow">
    //           detail
    //         </button>
    //       </Link>


    //       <button
    //         onClick={() => deleteBlog(blog?.id)}
    //         className=" px-5 py-1 ml-5 bg-red-700 text-white rounded-lg shadow"
    //       >
    //         delete
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className=" flex justify-center my-5">
      <div className=" flex justify-center my-5">
        <Link to={'/create'}>
          <button className="px-7 py-1 bg-gray-700 text-white rounded-lg shadow">
            Create New Blog
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={blog.img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>{blog.desc}</p>
          <div className="card-actions justify-end">
            <button onClick={() => deleteBlog(blog?.id)} className="btn btn-warning ">Delete</button>
            <Link to={`/detail/${blog?.id}`} ><button className="btn btn-primary">Detail</button></Link>
            <Link to={'/edit'}>
              <button className="btn btn-success">
                Edit
              </button>
            </Link>

          </div>
        </div>
      </div>


    </div>

  )
}

export default BlogCard