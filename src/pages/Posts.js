import React, {useEffect, useState} from 'react';
import axios from "axios";
import Home from "../components/Home";
import {Link} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function Posts(props) {
    const  [is, setIs]=useState(true)
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const [post, setPost]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>{
                setPost(post=>res.data)
                setIs(is=>false)
            })
    },[])
    return (
        <div>
            <Home/>
            {
                is?  <div className="sweet-loading">
                    <ClipLoader color={color} loading={loading} css={override} size={150} />
                </div> :  <div className="container">
                    <div className="row">
                        {
                            post.map((item,index)=>(
                                <div className="col-md-3 mt-5">
                                    <div className="card h-100 mt-4">
                                        <div className="card-header h-25 bg-dark text-center text-white">
                                               {item.title}
                                        </div>
                                        <div className="card-body">
                                            {item.body}
                                        </div>
                                        <div className="card-footer">
                                            <Link to={"/post/"+item.id}>Batafsil...</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            }



        </div>
    );
}

export default Posts;