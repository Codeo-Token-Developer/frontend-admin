import React from 'react'
import { CardDashboardBottomComponent, CardDashboardHeaderComponent } from '../component/mainPageComponent/cardDashboardComponent/CardDashboardComponent';

function Dashboard(){
    return (
        <div>
 
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="float-right">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Admin</a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Dashboard</h4>
                    </div>
                </div>
            </div>

            <CardDashboard />

        </div>
    )
}

const CardDashboard = (props) => {
    return(
        <div >
            
            <div className="row">
                <div className="col-lg-3">
                    <CardDashboardHeaderComponent/>
                </div>

                {/* <div className="col-lg-3">

                    <div className="card card-eco">
                        <div className="card-body">
                            <h4 className="title-text mt-0">Active Users</h4>
                            <div className="d-flex justify-content-between">
                                <h3 className="text-pink">18.521</h3>
                                <i className="dripicons-cart card-eco-icon bg-pink shadow-pink align-self-center" />
                            </div>
                            <p className="mb-0 text-muted text-truncate"><span className="text-success"><i className="mdi mdi-trending-up"> </i>1.5%</span> Up From Last Week</p>
                        </div>
                    </div>

                </div>

                <div className="col-lg-3">

                    <div className="card card-eco">
                        <div className="card-body">
                            <h4 className="title-text mt-0">Verified Users</h4>
                            <div className="d-flex justify-content-between">
                                <h3 className="text-secondary">9.523</h3>
                                <i className="dripicons-jewel card-eco-icon bg-secondary shadow-secondary align-self-center" />
                            </div>
                            <p className="mb-0 text-muted text-truncate"><span className="text-danger"><i className="mdi mdi-trending-down"> </i>4%</span> Down From Last Month</p>
                        </div>
                    </div>

                </div>

                <div className="col-lg-3">

                    <div className="card card-eco">
                        <div className="card-body">
                            <h4 className="title-text mt-0">Total Transaction</h4>
                            <div className="d-flex justify-content-between">
                                <h3 className="text-warning">6.521</h3>
                                <i className="dripicons-wallet card-eco-icon bg-warning shadow-warning align-self-center" />
                            </div>
                            <p className="mb-0 text-muted text-truncate"><span className="text-success"><i className="mdi mdi-trending-up"> </i>12.3%</span> Up From Yesterday</p>
                        </div>
                    </div>

                </div> */}
            </div>{/*end row*/}

            <div className="row">
                <div className="col-lg-3">
                    <CardDashboardBottomComponent />
                </div>

                {/* <div className="col-lg-3">

                    <div className="card card-eco">
                        <div className="card-body">
                            <h4 className="title-text mt-0">Total Generate Wallet</h4>
                            <div className="d-flex justify-content-between">
                                <h3 className="text-success">2.525</h3>
                                <i className="dripicons-cart card-eco-icon bg-success shadow-success align-self-center" />
                            </div>
                            <p className="mb-0 text-muted text-truncate"><span className="text-success"><i className="mdi mdi-trending-up"> </i>72.5%</span> Up From Last Week</p>
                        </div>
                    </div>

                </div>

                <div className="col-lg-3">

                    <div className="card card-eco">
                        <div className="card-body">
                            <h4 className="title-text mt-0">Total Active Wallet</h4>
                            <div className="d-flex justify-content-between">
                                <h3 className="text-primary">7.224</h3>
                                <i className="dripicons-jewel card-eco-icon bg-primary shadow-primary align-self-center" />
                            </div>
                            <p className="mb-0 text-muted text-truncate"><span className="text-danger"><i className="mdi mdi-trending-down"> </i>18%</span> Down From Last Month</p>
                        </div>
                    </div>

                </div>

                <div className="col-lg-3">

                    <div className="card card-eco">
                        <div className="card-body">
                            <h4 className="title-text mt-0">Total Codeo</h4>
                            <div className="d-flex justify-content-between">
                                <h3 className="text-purple">$ 9.234.419</h3>
                                <i className="dripicons-wallet card-eco-icon bg-purple shadow-purple align-self-center" />
                            </div>
                            <p className="mb-0 text-muted text-truncate">&nbsp;</p>
                        </div>
                    </div>

                </div> */}
            </div>
            
            <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body order-list">
                                <h4 className="header-title mt-0 mb-3">New User Just Login</h4>
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="border-top-0">Nama</th>
                                                <th className="border-top-0">Country</th>
                                                <th className="border-top-0">Date/Time</th>
                                                <th className="border-top-0">Status</th>
                                            </tr>{/*end tr*/}
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Master Thomas</td>
                                                <td>Indonesia</td>
                                                <td>17-02-2020 09:00 AM</td>
                                                <td><span className="badge badge-boxed badge-soft-success">Log In</span></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>Noob Ivan</td>
                                                <td>Indonesia</td>
                                                <td>17-02-2020 10:00 AM</td>
                                                <td><span className="badge badge-boxed badge-soft-success">Log In</span></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>CEO Agatha</td>
                                                <td>Indonesia</td>
                                                <td>17-02-2020 08:18 AM</td>
                                                <td><span className="badge badge-boxed badge-soft-danger">Log Out</span></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>Leader Wimora</td>
                                                <td>Indonesia</td>
                                                <td>17-02-2020 09:00 AM</td>
                                                <td><span className="badge badge-boxed badge-soft-success">Log In</span></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>Senior Shella</td>
                                                <td>Indonesia</td>
                                                <td>17-02-2020 09:00 AM</td>
                                                <td><span className="badge badge-boxed badge-soft-danger">Log Out</span></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>Dr. Chris</td>
                                                <td>Indonesia</td>
                                                <td>17-02-2020 08:50 AM</td>
                                                <td><span className="badge badge-boxed badge-soft-success">Log In</span></td>
                                            </tr>{/*end tr*/}
                                        </tbody>
                                    </table> {/*end table*/}
                                </div>{/*end /div*/}
                            </div>{/*end card-body*/}
                        </div>{/*end card*/}
                    </div>{/*end col*/}
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body order-list">
                                <h4 className="header-title mt-0 mb-3">New KYC Application</h4>
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="border-top-0">Date</th>
                                                <th className="border-top-0">Name</th>
                                                <th className="border-top-0">Action</th>
                                            </tr>{/*end tr*/}
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>17-02-2020 09:00 AM</td>
                                                <td>Master Thomas</td>
                                                <td>
                                                    <button className="btn btn-xs btn-danger">View Details</button>
                                                </td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>17-02-2020 10:00 AM</td>
                                                <td>Noob Ivan</td>
                                                <td>
                                                    <button className="btn btn-xs btn-danger">View Details</button>
                                                </td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>17-02-2020 08:18 AM</td>
                                                <td>CEO Agatha</td>
                                                <td>
                                                    <button className="btn btn-xs btn-danger">View Details</button>
                                                </td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>17-02-2020 09:00 AM</td>
                                                <td>Leader Wimora</td>
                                                <td>
                                                    <button className="btn btn-xs btn-danger">View Details</button>
                                                </td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>17-02-2020 09:00 AM</td>
                                                <td>Senior Shella</td>
                                                <td>
                                                    <button className="btn btn-xs btn-danger">View Details</button>
                                                </td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td>17-02-2020 08:50 AM</td>
                                                <td>Dr. Chris</td>
                                                <td>
                                                    <button className="btn btn-xs btn-danger">View Details</button>
                                                </td>
                                            </tr>{/*end tr*/}
                                        </tbody>
                                    </table> {/*end table*/}
                                </div>{/*end /div*/}
                            </div>{/*end card-body*/}
                        </div>{/*end card*/}
                    </div>{/*end col*/}
                </div>{/*end row*/}
            
        </div>
    )
}

export default Dashboard;