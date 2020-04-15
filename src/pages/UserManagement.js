import React from 'react'

function UserManagement() {
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
            <CardUserManagement />
            <DropdownUserManagement />
        </>
    )
}

const CardUserManagement = () => {
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

const DropdownUserManagement = () => {
    return(
        <div className="modal fade bs-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title mt-0" id="myLargeModalLabel">Add News</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                        <form>
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
                                            <option selected>Choose Category</option>
                                            <option value={1}>Indonesia</option>
                                            <option value={2}>Other Planet</option>
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
                            <button type="button" className="btn btn-sm btn-gradient-primary">Save</button>
                            <button type="button" className="btn btn-sm btn-gradient-danger">Delete</button>
                        </form>
                    </div>
                </div>{/* /.modal-content */}
            </div>{/* /.modal-dialog */}
        </div>
    )
}

export default UserManagement;
