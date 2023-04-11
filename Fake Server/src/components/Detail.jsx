import React from 'react'
import { useGetSingleBlogQuery } from '../feature/blog'
import { Link, useParams } from 'react-router-dom'

const Detail = () => {
    const { id } = useParams();
    const { data:blog } = useGetSingleBlogQuery(id);
    console.log(blog);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={blog?.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{blog?.title}</h2>
                    <p>{blog?.desc}</p>
                    <div className="card-actions">
                        
                        <Link to={"/"}>
                        <button className="btn btn-success">Back</button>
                        </Link>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail