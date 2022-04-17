import * as React from 'react';
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {collection, getDoc ,deleteDoc,doc,onSnapshot,updateDoc} from "firebase/firestore";
import { db } from "../../firebase";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const Datatable = () => {
  const [data, setData] = useState([]);//empty array
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleCloses = () => setOpens(false);
  const [ups, setUps] = useState([{displayName:"temp",email:"temp",
  img:"temp",phone:"temp",address:"temp",country:"temp",designation:"temp",age:"temp",salary:"temp",joining:"temp"}]);
  const [see, setSee] = useState([{}]);
  const [upsdoc, setUpsdoc] =useState() ;
  const [updata, setUpdata] = useState({});//empty object
  const navigate = useNavigate()

  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //     console.log(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleView = async (id)=>{
    let viewlist = [];
    const docRef = doc(db, "users", id)
    const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setOpen(true);
        viewlist.push({ ...docSnap.data() });
        console.log(viewlist);
        console.log("View data:", docSnap.data() );
        setUps(viewlist);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  const handleUpdate = async (id)=>{
    let uplist = [];
    const docRef = doc(db, "users", id)
      const docSnap = await getDoc(docRef);
      setUpsdoc(docRef)
      if (docSnap.exists()) {
        setOpens(true);
        uplist.push({ ...docSnap.data() });
        console.log(uplist);
        console.log("Update data:", docSnap.data());
        setSee(uplist);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such data for View!");
      }
    }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users" style={{ textDecoration: "none" }}>
              <div
              className="viewButton"
              onClick={() => handleView(params.row.id)}
              >
                View
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            <div
              className="updateButton"
               onClick={() => handleUpdate(params.row.id)}
            >
              Update
            </div>
          </div>
        );
      },
    },
  ];
  const handleInputs = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    console.log(value)
    console.log(id)
    setUpdata({ ...updata, [id]: value });
  };
  const handleAdds = async (e) => {
    e.preventDefault();
    console.log(updata)
    try{
     await updateDoc(upsdoc,{
      ...updata,
    });
    alert("Updated")
    navigate(-0)
  }
    catch(err) {
      console.log(err);
    }
}
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/Employee/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box className="modal">
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
            <img
            alt=''
                src={ups[0].img}
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{ups[0].designation}</h1>
                <div className="detailItem">
                  <span className="itemKey">Employee Id:</span>
                  <span className="itemValue">{ups[0].empid}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">DisplayName:</span>
                  <span className="itemValue">{ups[0].displayName}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{ups[0].email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{ups[0].phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                  {ups[0].address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{ups[0].country}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Age:</span>
                  <span className="itemValue">{ups[0].age}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Salary:</span>
                  <span className="itemValue">{ups[0].salary}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Joining:</span>
                  <span className="itemValue">{ups[0].joining}</span>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
  </Box>
</Modal>
<Modal
  open={opens}
  onClose={handleCloses}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"

>
  <Box  className="upmodal">
    <form onSubmit={handleAdds}>
  <span> Designation:<input id={"designation"} type="text" defaultValue={see[0].designation} onChange={handleInputs}/><br/></span>
   <span>Full Name: &nbsp; <input id={"displayName"} type="text" defaultValue={see[0].displayName} onChange={handleInputs}/><br/></span>
   <span>Email:&nbsp;<input id={"email"} type="text" defaultValue={see[0].email} onChange={handleInputs}/><br/></span>
   <span>Phone:      <input id={"phone"} type="text" defaultValue={see[0].phone} onChange={handleInputs}/><br/></span>
   <span>Address:    <input id={"address"} type="text" defaultValue={see[0].address} onChange={handleInputs}/><br/></span>
   <span>Country:    <input id={"country"} type="text" defaultValue={see[0].country} onChange={handleInputs}/><br/></span>
   <span>Age:        <input id={"age"} type="text" defaultValue={see[0].age} onChange={handleInputs}/><br/></span>
   <span>Salary:     <input id={"salary"} type="text" defaultValue={see[0].salary} onChange={handleInputs}/><br/></span>
   <span>Joining:    <input id={"joining"} type="date" defaultValue={see[0].joining} onChange={handleInputs}/><br/></span>
   <button type="submit"> Update </button>
   </form>
  </Box>
</Modal>
    </div>
  );
};

export default Datatable;
