import React, {useReducer, useRef} from 'react';
import {AvField, AvForm} from 'availity-reactstrap-validation'
import {Modal, ModalBody, ModalHeader} from "reactstrap";

function ReduserCrudProject(props) {
    const myForm = useRef()

    function reduser(state, action) {
        switch (action.type) {
            case "ADD_PER":
            case "DELET_PER":
            case "MODAL":
            case "EDIT_PER":
                state = {
                    ...state

                }
        }

        return state
    }

    const [state, dispatch] = useReducer(reduser, {
        persons: [{
            ism: "Otaqulov Sherzod",
            manzil: "Bukhara",
            yosh: 20,
            lavozim: "Devoloper"
        }],
        editedIndex: -1,
        modal:false
    })

    function addPerson(event, value) {
        if (state.editedIndex >= 0) {
            state.persons[state.editedIndex] = value
        } else {
            state.persons.push(value)
        }
        dispatch({type: "ADD_PER"})
        myForm.current.reset()

    }
 function deletPerson(index) {
     state.persons.splice(index,1)
     dispatch({type: "DELET_PER"})
 }
 function modalToggle() {
     state.modal=!state.modal
     dispatch({type:"MODAL"})
 }
 function editPerson(edited) {
    state.editedIndex=edited
     dispatch({type:"EDIT_PER"})
 }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <div className="card">
                            <div className="card-header bg-dark text-center text-white">
                                Malummot qo'shish
                            </div>
                            <div className="card-body">
                                <AvForm ref={myForm} onValidSubmit={addPerson}>
                                    <AvField
                                        required
                                        name='ism'
                                        type={'text'}
                                        placeholder={'F.I.Sh'}
                                        label={'F.I.SH'}
                                        className="form-control"
                                    />
                                    <AvField
                                        required
                                        name='manzil'
                                        type={'text'}
                                        placeholder={'Buxoro'}
                                        label={'Manzil'}
                                        className="form-control"
                                    />
                                    <AvField
                                        required
                                        name='yosh'
                                        type={'number'}
                                        placeholder={'20'}
                                        label={'Yoshingni kirit'}
                                        className="form-control"
                                    />
                                    <AvField
                                        required
                                        name='lavozim'
                                        type={'select'}
                                        label={'Lavozimni kirit'}
                                        className="form-control"
                                    >
                                        <option value="Manager">Manager</option>
                                        <option value="Teacher">Teacher</option>
                                        <option value="Operator">Operator</option>
                                        <option value="Doctor">Doctor</option>
                                    </AvField>
                                    <button type={'submit'} className="btn btn-success btn-block">Malumotlarni
                                        qo'shish
                                    </button>
                                </AvForm>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 mt-5">
                        <table className="table table-bordered table-hover">
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
                                state.persons.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.ism}</td>
                                        <td>{item.manzil}</td>
                                        <td>{item.yosh}</td>
                                        <td>{item.lavozim}</td>
                                        <td className="d-flex justify-content-between">
                                            <button onClick={()=>deletPerson(index)} className="btn btn-danger">Delete</button>
                                            <button onClick={()=>{modalToggle(); editPerson(index)}}  className="btn btn-success">Edit</button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Modal isOpen={state.modal} toggle={modalToggle}>
                        <ModalHeader toggle={modalToggle}>Edit Employee</ModalHeader>
                        <ModalBody>
                            <div className="card">
                                <div className="card-header text-white text-center bg-warning">
                                    Tahrirlash
                                </div>
                                <div className="card-body">
                                    <AvForm model={state.persons[state.editedIndex]}  onValidSubmit={addPerson}>
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
        </div>
    );
}

export default ReduserCrudProject;