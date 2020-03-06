import React from 'react'

export const CardDashboardHeaderComponent = () => {
    return (
        <div className="card card-eco">
            <div className="card-body">
                <h4 className="title-text mt-0">Total Users</h4>
                <div className="d-flex justify-content-between">
                    <h3 className="text-purple">122.424</h3>
                    <i className="dripicons-user-group card-eco-icon bg-purple shadow-purple align-self-center" />
                </div>
                <p className="mb-0 text-muted text-truncate"><span className="text-success"><i className="mdi mdi-trending-up"> </i>5.5%</span> Up From Yesterday</p>
            </div>
        </div>
    )
}

export const CardDashboardBottomComponent = () => {
    return(
        <div className="card card-eco">
            <div className="card-body">
                <h4 className="title-text mt-0">User Register Today</h4>
                <div className="d-flex justify-content-between">
                    <h3 className="text-danger">246</h3>
                    <i className="dripicons-user-group card-eco-icon bg-danger shadow-danger align-self-center" />
                </div>
                <p className="mb-0 text-muted text-truncate"><span className="text-success"><i className="mdi mdi-trending-up"> </i>9%</span> Up From Yesterday</p>
            </div>
        </div>
    )
}