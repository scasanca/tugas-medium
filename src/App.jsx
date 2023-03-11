import React, { useEffect, useState } from 'react'

const App = () => {

  const [record, setRecord] = useState([]);
  const [show, setShow] = useState([false]);
  const [modaldata, setModaldata] = useState({
    id: "",
    name: "",
    username:"",
    email:"",
    phone:"a",
    website:"",
  });

  // get data for all user
const getData = () =>{
  fetch ("https://jsonplaceholder.typicode.com/users/")
  .then ((response) => response.json())
  .then ((res) => setRecord(res));
}
useEffect(() => {
  getData();
}, []);




  return (

    <div className='w-full h-screen flex justify-center items-center    '>
       {/* displays all employee data */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
       <h2 className='text-2xl font-bold mb-4'>Check More Records of Employees</h2>
       <table cellSpacing={10}>
        <thead>
         <tr>
          <th>No</th>
          <th>Name</th>
          <th>Username</th>
          <th>Show Details</th>
         </tr>
        </thead>
       <tbody>
       {record.map((names, index) => (
         <tr key={index} >
           <td>{names.id}</td>
           <td>{names.name}</td>
           <td>{names.username}</td>
           <td>
            <div className='px-4 py-2 text-white bg-gray-500 rounded-sm hover:bg-gray-700 focus:outline-none'>
             <button  
               onClick={() => {
                 setShow(true);
                 showDetail(names.id);
               }}
             >
               Get Details
             </button>
             </div>
           </td>
         </tr>
       ))}
      </tbody>
     </table>
     </div>

   {/* displays employee detail data according to id */}
   {/* Modal Box  */}
   {show ? (
    <div className='fixed w-full h-screen bg-transparent flex justify-center items-center'>
   <div className="modal opacity-100 bg-white rounded-lg shadow-lg w-1/2">
     <div className="modal-header bg-gray-200 p-4 flex justify-between items-center rounded-t-lg">
       <div className="px-2 py-1 bg-gray-500 text-white rounded-sm hover:bg-gray-700 focus:outline-none">
         <button onClick={() => setShow(false)} style={{ float: "right" }}>
           &times;
         </button >
         <h4 className='fontbold'>Row No : {modaldata.id}</h4>
       </div>
       <div className="modal-body p-4">
         <p className='p-2'>
           <b>ID:</b> {modaldata.id}
         </p>
         <p className='p-2'>
           <b>Name:</b> {modaldata.name}
         </p>
         <p className='p-2'>
           <b>Username:</b> {modaldata.username}
         </p>
         <p className='p-2'>
           <b>Email:</b> {modaldata.email}
         </p>
         <p className='p-2'>
           <b>Phone:</b> {modaldata.phone}
         </p>
         <p className='p-2'>
           <b>Website:</b> {modaldata.website}
         </p>
        </div>
        <div className="modal-footer bg-gray-200 p-4 rounded-b-lg flex justify-end">
          <div className= 'px-4 py-2 text-white bg-red-700 rounded-sm hover:bg-red-800 focus:outline-none'>
         <button
           onClick={() => setShow(false)}
           className="btn-close"
         >
           Close
         </button>
         </div>
        </div>
       </div>
      </div>
      </div>
      ) : null}

    </div>
  );
}

export default App