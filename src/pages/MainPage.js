import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Pages
import UserManagement from './UserManagement'
import CMSUpdate from './CMSUpdate'
import Ledger from './Ledger'
import KYCApproval from './KYCApproval'
import Dashboard from './Dashboard'

//Component
import Header from '../component/headerComponent/Header'
import NavLeft from '../component/navbarComponent/NavLeft'

export default function MainPage() {
    return (
        <>
            <Header />
            <div className="page-wrapper">
            <NavLeft />
                <div className="page-content">
                    <div className="container-fluid">  
                        <Switch>
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/userManagement" component={UserManagement} />
                            <Route path="/cmsUpdate" component={CMSUpdate} />
                            <Route path="/ledger" component={Ledger} />
                            <Route path="/kycApproval" component={KYCApproval} />
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}
