import React, {useReducer, useRef, useState} from 'react';
import {AvForm,  AvField} from 'availity-reactstrap-validation'
import {Modal,ModalBody,ModalHeader} from "reactstrap";

function ReduserCrud(props) {
    function reducer(state,action) {
        switch (action.type) {
            case "ADD_PER":
            case "DELETE_PER":
            case "SHOW_MODAL":
            case "EDIT_PER":
                state={
                    ...state
                }
                break;
        }


        return state
    }
    const Myuser=useRef();
    const [state ,dispatch]=useReducer(reducer,{
        person:[{
            ism:"Otaqulov Sherzod",
            manzil:"Buxoro",
            yosh:20,
            lavozim:"Devoloper"
        }],
        editedIndex:-1,
       modal:false
    })
   function modalToggle(){
        state.modal=!state.modal
        dispatch({type:"SHOW_MODAL"})
    }
    function addPerson(event,value) {
        if (state.editedIndex>=0){
            state.person[state.editedIndex]=value
        }
        else{
            state.person.push(value)
        }

        dispatch({type:"ADD_PER"})
        Myuser.current.reset();
    }
    function deletePerson(index) {
        state.person.splice(index,1)
        dispatch({type: "DELETE_PER"})
    }
    function editPerson(editIndex) {
        state.editedIndex=editIndex;
        dispatch({type:"EDIT_PER"})
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                   <div className="col-md-4 mt-5">
                       <div className="card">
                           <div className="card-header bg-dark text-center text-white">
                               Add Person
                           </div>
                           <div className="card-body">
                               <AvForm ref={Myuser} onValidSubmit={addPerson}>
                                   <AvField
                                   label="F.I.SH"
                                   name='ism'
                                   required
                                   className="form-control"
                                   type="text"
                                   />
                                   <AvField
                                       label="Manzili"
                                       name='manzil'
                                       required
                                       className="form-control"
                                       type="text"
                                   />
                                   <AvField
                                       label="Yosh"
                                       name='yosh'
                                       required
                                       className="form-control"
                                       type="number"
                                   />
                                   <AvField
                                       label="Lavozimni kirit"
                                       name='lavozim'
                                       required
                                       className="form-control"
                                       type="select"
                                   >
                                       <option value="Operator">Operator</option>
                                       <option value="Manager">Manager</option>
                                       <option value="Devoloper">Devoloper</option>
                                       <option value="Administrator">Administrator</option>
                                   </AvField>
                                   <button type="submit" className="btn btn-success btn-block">Malumotlarni qo'shish</button>
                               </AvForm>
                           </div>
                       </div>
                   </div>
                    <div className="col-md-8 mt-5">
                        <table className="table table-hover table-bordered">
                          <thead>
                          <tr>
                              <th>#</th>
                              <th>F.I.Sh</th>
                              <th>Manzil</th>
                              <th>Yosh</th>
                              <th>Lavozim</th>
                              <th>Amallar</th>
                          </tr>
                          </thead>
                            <tbody>
                            {
                             state.person.map((item,index)=>(
                                 <tr key={index}>
                                     <td>{index+1}</td>
                                     <td>{item.ism}</td>
                                     <td>{item.manzil}</td>
                                     <td>{item.yosh}</td>
                                     <td>{item.lavozim}</td>
                                     <td className="d-flex justify-content-between">
                                         <button onClick={()=>deletePerson(index)} className="btn btn-danger">Delete</button>
                                         <button onClick={()=>{modalToggle(); editPerson(index)}} className="btn btn-success">Edit</button>
                                     </td>
                                 </tr>
                             ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <Modal isOpen={state.modal} toggle={modalToggle}>
                    <ModalHeader toggle={modalToggle}>Edit Employee</ModalHeader>
                    <ModalBody>
                        <div className="card">
                            <div className="card-header text-white text-center bg-warning">
                               Tahrirlash
                            </div>
                            <div className="card-body">
                                <AvForm model={state.person[state.editedIndex]} ref={Myuser} onValidSubmit={addPerson}>
                                    <AvField
                                        label="F.I.SH"
                                        name='ism'
                                        required
                                        className="form-control"
                                        type="text"
                                    />
                                    <AvField
                                        label="Manzili"
                                        name='manzil'
                                        required
                                        className="form-control"
                                        type="text"
                                    />
                                    <AvField
                                        label="Yosh"
                                        name='yosh'
                                        required
                                        className="form-control"
                                        type="number"
                                    />
                                    <AvField
                                        label="Lavozimni kirit"
                                        name='lavozim'
                                        required
                                        className="form-control"
                                        type="select"
                                    >
                                        <option value="Operator">Operator</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Devoloper">Devoloper</option>
                                        <option value="Administrator">Administrator</option>
                                    </AvField>
                                    <button onClick={modalToggle}  type="submit" className="btn btn-danger btn-block">Malumotlarni qo'shish</button>
                                </AvForm>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
}

export default ReduserCrud;