import React, {useEffect,useState} from 'react';
import axios from "axios";
import Home from "./Home";

function MorePage(props) {
    {console.log(props)}
    const [state, usestate]=useState({})
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/"+ props.match.params.id)
            .then(res=>{
                usestate(state=>res.data)
            })
    })
    return (
        <div>

            <Home/>

         <div className="container">
             <div className="row">
                 {
                     <div className="col-md-6 offset-3 mt-5">
                        <div className="card">
                            <div className="card-header bg-dark text-white text-center">
                                {state.title}
                            </div>
                            <div className="card-body">
                                {state.body}
                            </div>


                        </div>
                     </div>
                 }


             </div>
         </div>
        </div>
    );
}

export default MorePage;