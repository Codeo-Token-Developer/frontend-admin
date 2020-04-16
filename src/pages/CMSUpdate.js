import React, { useState, useContext } from 'react'
import Axios from 'axios'
import { urlContext } from '../Context'

function CMSUpdate() {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="float-right">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Admin</a></li>
                                <li className="breadcrumb-item active">CMS Update</li>
                            </ol>
                        </div>
                        <h4 className="page-title">CMS Update</h4>
                    </div>
                </div>
            </div>
            <CardCMSUpdate />
            <DropdownCMSUpdate />
        </>
    )
}

const CardCMSUpdate = () => {
    return(
        <div className="row">
            <div className="col-12">
            <div className="card">
                <div className="card-body">
                <button type="button" className="btn btn-gradient-primary waves-effect waves-light float-right mb-3" data-toggle="modal" data-animation="bounce" data-target=".bs-example-modal-lg">+ Add News</button>
                <h4 className="header-title mt-0">CMS Update</h4> 
                <div className="table-responsive dash-social">
                    <table id="datatable" className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Action</th>
                        </tr>{/*end tr*/}
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            Grand Opening Codeo Token
                        </td>
                        <td>
                            Homepage
                        </td>
                        <td>
                            Pembukaan Codeo Token Admin
                        </td>
                        <td>                                                       
                            <a href="#" className="mr-2"><i className="fas fa-edit text-info font-16" /></a>
                            <a href="#"><i className="fas fa-trash-alt text-danger font-16" /></a>
                        </td>
                        </tr>{/*end tr*/}
                        <tr>
                        <td>
                            Grand Opening Codeo Token
                        </td>
                        <td>
                            Homepage
                        </td>
                        <td>
                            Pembukaan Codeo Token Admin
                        </td>
                        <td>                                                       
                            <a href="#" className="mr-2"><i className="fas fa-edit text-info font-16" /></a>
                            <a href="#"><i className="fas fa-trash-alt text-danger font-16" /></a>
                        </td>
                        </tr>{/*end tr*/}
                        <tr>
                        <td>
                            Grand Opening Codeo Token
                        </td>
                        <td>
                            Homepage
                        </td>
                        <td>
                            Pembukaan Codeo Token Admin
                        </td>
                        <td>                                                       
                            <a href="#" className="mr-2"><i className="fas fa-edit text-info font-16" /></a>
                            <a href="#"><i className="fas fa-trash-alt text-danger font-16" /></a>
                        </td>
                        </tr>{/*end tr*/}
                    </tbody>
                    </table>                    
                </div>                                         
                </div>{/*end card-body*/} 
            </div>{/*end card*/} 
            </div> {/*end col*/}                               
        </div>
    )
}

const DropdownCMSUpdate = () => {
    const baseURL = useContext(urlContext);
    const stateCMS = {
        title: "",
        category: "",
        description: ""
    }
    
    const [dataCMS, setDataCMS] = useState(stateCMS)

    const handleChangeCMS = (e) => {
        setDataCMS({
            ...dataCMS,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitCMS = (e) => {
        e.preventDefault();
        Axios({
            url: `${baseURL}/cms/`,
            method: "POST",
            headers: {
                admintoken: localStorage.getItem("codeoToken")
            },
            data: {
                title: dataCMS.title,
                category: dataCMS.category,
                description: dataCMS.description
            }
        })
        .then(err => {
            alert(JSON.stringify(stateCMS))
        }).catch(err => {
            alert(JSON.stringify(err))
        });    
    }

    return(
        <div className="modal fade bs-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title mt-0" id="myLargeModalLabel">Add News</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body">
                  <form method="post" onSubmit={onSubmitCMS}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="Title">Title</label>
                          <input type="text" className="form-control" id="Title" onChange={handleChangeCMS} required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="status-select" className="mr-2">Category</label>
                          <select className="custom-select" id="status-select" onChange={handleChangeCMS}>
                            <option selected>Choose Category</option>
                            <option value="Wallet">Wallet</option>
                            <option value="HomePage">Homepage</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="Description">Description</label>
                          <textarea className="form-control" id="Description" defaultValue={""} onChange={handleChangeCMS}/>
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

export default CMSUpdate;