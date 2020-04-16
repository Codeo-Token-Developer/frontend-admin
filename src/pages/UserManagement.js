import React,{useState,useEffect,useContext} from "react";
import axios from "axios";
import {urlContext} from "../Context";

function UserManagement() {
  let country=["United Arab Emirates","Argentina","Austria","Australia","Belgium","Brazil","Canada","Switzerland","China","Germany","Spain","France","United Kingdom","Indonesia","India","Italy","Japan","South Korea","Mexico","Nigeria","Netherlands","Norway","Poland","Russia","Saudi Arabia","Sweden","Thailand","Turkey","United States","Venezuela"];
  let baseUrl=useContext(urlContext);

    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="float-right">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#a">Admin</a></li>
                                <li className="breadcrumb-item active">User Management</li>
                            </ol>
                        </div>
                        <h4 className="page-title">User Management</h4>
                    </div>
                </div>
            </div>
            <CardUserManagement baseUrl={baseUrl} />
            <DropdownUserManagement baseUrl={baseUrl} country={country||[]} />
        </>
    )
}

const CardUserManagement = (props) => {

  const [status,setStatus]=useState(false);
  let [data,setData]=useState(
    [{username:"Username is empty",email:"Email is empty",id_country:"Country is empty"}]
  );


  function Main(data) {
    useEffect(()=>{
      if(!status){
        data.getUser();
      }
    },[data]);
  }

  Main({
    getUser:getUsers
  });


  function getUsers() {

    axios({
      url:`${props.baseUrl}/users`,
      method:"GET",
      headers:{
        adminToken:localStorage.getItem("adminToken")
      }
    }).then(({data})=>{
      setData(data.users);
      setStatus(true);
    }).catch(err=>{
      setData({username:"Username is empty",email:"Email is empty",id_country:"Country is empty"})
      console.log(err);
    });

  }

    return(
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <button type="button" className="btn btn-gradient-primary waves-effect waves-light float-right mb-3" data-toggle="modal" data-animation="bounce" data-target=".bs-example-modal-lg">+ Add New</button>
                        <h4 className="header-title mt-0">User Details</h4>
                        <div className="table-responsive dash-social">
                            <table id="datatable" className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Country</th>
                                        <th>Action</th>
                                    </tr>{/*end tr*/}
                                    {
                                      (data===undefined||data===null)?[]:data.map((item)=>{

                                        return (
                                          <tr>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{(item.id_country===undefined||item.id_country===null)?"none":item.id_country}</td>
                                            <td>
                                              <a href={"#edit#"+item.username} className="mr-2"><i className="fas fa-edit text-info font-16"></i></a>
                                              <a href={"#delete#"+item.username}><i className="fas fa-trash-alt text-danger font-16"></i></a>
                                            </td>
                                          </tr>
                                        );
                                      })
                                    }
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>{/*end card-body*/}
                </div>{/*end card*/}
            </div> {/*end col*/}
        </div>
    )
}

const DropdownUserManagement = (props) => {


    const handleSubmit=(e)=>{
      e.preventDefault();
    };

    return(
        <div className="modal fade bs-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title mt-0" id="myLargeModalLabel">Add News</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="Title">Nama</label>
                                        <input type="text" className="form-control" id="Nama" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="status-select" className="mr-2">Country</label>
                                        <select className="custom-select" id="status-select">
                                            <option value="none" selected>Choose Category</option>
                                            {
                                              props.country.map((item)=><option value={item}>{item}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="Email">Email</label>
                                        <input type="email" className="form-control" id="Email" required />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-sm btn-gradient-primary">Save</button>
                            <button type="button" className="btn btn-sm btn-gradient-danger">Delete</button>
                        </form>
                    </div>
                </div>{/* /.modal-content */}
            </div>{/* /.modal-dialog */}
        </div>
    )
}

export default UserManagement;
