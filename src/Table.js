import React, { useState, useEffect } from "react";
import "./App.css";
// import { db } from "./firebase";
// import { doc, collection, addDoc, query, onSnapshot, updateDoc, deleteDoc } from "firebase/firestore"

const Table = () => {
    const collectionName = "punforum";
    const [customerName, setCustomerName] = useState("");
    const [customerPun, setCustomerPun] = useState("");
    const [data, setData] = useState([]);
    const [updatedCustomerName, setUpdatedCustomerName] = useState("");
    const [updatedCustomerPun, setUpdatedCustomerPun] = useState("");
    const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
 
    // TODO: Implement the useEffect hook from Part Three
 
    const submit = (e) => {
        // TODO: Implement the submit function from Part Three
    };
 
    const updateData = (e) => {
        // TODO: Implement the updateData function from Part Three
    };
 
    const deleteData = (id) => {
        // TODO: Implement the deleteData function from Part Three
    };
 
    return(
    <>
        {!dataIdToBeUpdated ? (
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Pun"
                        value={customerPun}
                        onChange={(e) => setCustomerPun(e.target.value)}
                    />
                    <button onClick={submit}>Submit</button>
                </div>
            ) : (
                <div className="App__Updateform">
                    <input
                        type="text"
                        placeholder="Name"
                        value={updatedCustomerName}
                        onChange={(e) => setUpdatedCustomerName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Pun"
                        value={updatedCustomerPun}
                        onChange={(e) => 
                        setUpdatedCustomerPun(e.target.value)}
                    />
                    <button onClick={updateData}>Update</button>
                </div>
            )}
 
            <div className="App__DataDisplay">
                <table>
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>PASSWORD</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data && 
                    data.map((d) => { 
                        return (
                        <tr key={d.id}>
                            <td>{d.body.name}</td>
                            <td>{d.body.pun}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setDataIdToBeUpdated(d.id);
                                        setUpdatedCustomerPun(d.body.pun);
                                        setUpdatedCustomerName(d.body.name);
                                    }}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        deleteData(d.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )})}
                    </tbody>
                </table>
            </div>
    </>
    )
}

export default Table