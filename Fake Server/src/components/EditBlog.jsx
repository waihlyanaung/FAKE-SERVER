import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetSingleBlogQuery, useUpdateBlogMutation } from '../feature/blog';

const EditBlog = () => {
    const { id } = useParams();
    const {data: blog} = useGetSingleBlogQuery(id)
    const [title, setTitle] = useState('');
    const [desc, setDes] = useState('');
    const [img, setImage] = useState('');
  


    const navigate = useNavigate();
    const [updateBlog] = useUpdateBlogMutation(id)
    useEffect(() =>{
      setTitle(blog?.title);
      setDes(blog?.desc)
      setImage(blog?.img)
    },[blog]);

    
    const onSubmit = ( e )=>{
        e.preventDefault();
        const newData = {id,title,img,desc}
        updateBlog(newData)
        navigate('/');
       console.log(title,img,desc);
      }

  

    return (
        <div className="hero min-h-screen bg-base-200">
        <form onSubmit={onSubmit}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Edit Blog</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input defaultValue={img}
                                onChange={(e) => setImage(e.target.value)} type="text" placeholder="image" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input defaultValue={title}
                                onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title" className="input input-bordered" />
                            
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input defaultValue={desc}
                                onChange={(e) => setDes(e.target.value)} type="text" placeholder="description" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Edit Blog</button>
                        </div>
                    </div>
                </div>
            </div></form>
    </div>
    
    )
}

export default EditBlog