import React from "react";
import classnames from "classnames";

export const CardDashboardComponent = props => {
  //const colorSelection = props.setColor;

  return (
    <div className="card card-eco">
      <div className="card-body">
        <h4 className="title-text mt-0">{props.titleData}</h4>
        <div className="d-flex justify-content-between">
          <h3 className={classnames("text-" + props.setColor)}>
            {props.totalCount}
          </h3>
          <i
            className={classnames(
              props.setIcon,
              "card-eco-icon",
              "bg-" + props.setColor,
              "shadow-" + props.setColor,
              "align-self-center"
            )}
          />
        </div>
        <p className="mb-0 text-muted text-truncate">
          <span className={classnames(props.upDownText)}>
            <i className={classnames(props.upDownClass)}> </i>
            {props.percentData}
          </span>{" "}
          {props.textPercent}
        </p>
      </div>
    </div>
  );
};

export const TableDashboardNewUserJustLoginComponent = props => {
  return (
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
                </tr>
                {/*end tr*/}
              </thead>
              <tbody>
                <tr>
                  <td>Master Thomas</td>
                  <td>Indonesia</td>
                  <td>17-02-2020 09:00 AM</td>
                  <td>
                    <span className="badge badge-boxed badge-soft-success">
                      Log In
                    </span>
                  </td>
                </tr>
                {/*end tr*/}
                <tr>
                  <td>Noob Ivan</td>
                  <td>Indonesia</td>
                  <td>17-02-2020 10:00 AM</td>
                  <td>
                    <span className="badge badge-boxed badge-soft-success">
                      Log In
                    </span>
                  </td>
                </tr>
                {/*end tr*/}
                <tr>
                  <td>CEO Agatha</td>
                  <td>Indonesia</td>
                  <td>17-02-2020 08:18 AM</td>
                  <td>
                    <span className="badge badge-boxed badge-soft-danger">
                      Log Out
                    </span>
                  </td>
                </tr>
                {/*end tr*/}
                <tr>
                  <td>Leader Wimora</td>
                  <td>Indonesia</td>
                  <td>17-02-2020 09:00 AM</td>
                  <td>
                    <span className="badge badge-boxed badge-soft-success">
                      Log In
                    </span>
                  </td>
                </tr>
                {/*end tr*/}
                <tr>
                  <td>Senior Shella</td>
                  <td>Indonesia</td>
                  <td>17-02-2020 09:00 AM</td>
                  <td>
                    <span className="badge badge-boxed badge-soft-danger">
                      Log Out
                    </span>
                  </td>
                </tr>
                {/*end tr*/}
                <tr>
                  <td>Dr. Chris</td>
                  <td>Indonesia</td>
                  <td>17-02-2020 08:50 AM</td>
                  <td>
                    <span className="badge badge-boxed badge-soft-success">
                      Log In
                    </span>
                  </td>
                </tr>
                {/*end tr*/}
              </tbody>
            </table>{" "}
            {/*end table*/}
          </div>
          {/*end /div*/}
        </div>
        {/*end card-body*/}
      </div>
      {/*end card*/}
    </div>
  );
};

export const TableDashboardUserNewKYCAppComponent = props => {
  return (
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
                </tr>
                {/*end tr*/}
              </thead>
              <tbody>
                <tr>
                  <td>17-02-2020 09:00 AM</td>
                  <td>Master Thomas</td>
                  <td>
                    <button className="btn btn-xs btn-danger">
                      View Details
                    </button>
                  </td>
                </tr>
                {/*end tr*/}
                <tr>
                  <td>17-02-2020 10:00 AM</td>
                  <td>Noob Ivan</td>
                  <td>
                    <button className="btn btn-xs btn-danger">
                      View Details
                    </button>
                  </td>
                </tr>
                {/*end tr*/}
                <tr>
                  <td>17-02-2020 08:18 AM</td>
                  <td>CEO Agatha</td>
                  <td>
                    <button className="btn btn-xs btn-danger">
                      View Details
                    </button>
                  </td>
                </tr>
                {/*end tr*/}
                <tr>
                  <td>17-02-2020 09:00 AM</td>
                  <td>Leader Wimora</td>
                  <td>
                    <button className="btn btn-xs btn-danger">
                      View Details
                    </button>
                  </td>
                </tr>
                {/*end tr*/}
                <tr>
                  <td>17-02-2020 09:00 AM</td>
                  <td>Senior Shella</td>
                  <td>
                    <button className="btn btn-xs btn-danger">
                      View Details
                    </button>
                  </td>
                </tr>
                {/*end tr*/}
                <tr>
                  <td>17-02-2020 08:50 AM</td>
                  <td>Dr. Chris</td>
                  <td>
                    <button className="btn btn-xs btn-danger">
                      View Details
                    </button>
                  </td>
                </tr>
                {/*end tr*/}
              </tbody>
            </table>{" "}
            {/*end table*/}
          </div>
          {/*end /div*/}
        </div>
        {/*end card-body*/}
      </div>
      {/*end card*/}
    </div>
  );
};
