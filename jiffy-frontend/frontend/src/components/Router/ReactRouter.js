import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../containers/LandingPage/LandingPage';

// import AddressBox from '../../containers/LandingPage/AddressBox';
import AccountOrders from '../../containers/Account/AccountOrders';
import DeliveryInfo from '../../containers/DeliveryInfo/DeliveryInfo';
import OrderConfirm from '../../containers/OrderConfirm/OrderConfirm';
import PlaceOrder from '../../containers/PlaceOrder/PlaceOrder';
import Recommend from '../../containers/Recommend/Recommend';
//import SignPage from '../../containers/SignPage/SignPage';
import Tracking from '../../containers/Tracking/Tracking';

import AccountAddress from '../../containers/Account/AccountAddress';
import AccountPayment from '../../containers/Account/AccountPayment';

import AccountEditAddress from '../../containers/Account/AccountEditAddress';
import SuccessInfo from '../../components/SuccessInfo/SuccessInfo';

class ReactRouter extends Component {
    render() {
        return (
            <div> 
                
                    <Switch>
                        {/* homepage */}
                        <Route path="/" component={LandingPage} exact />  

                        <Route path="/AccountOrders" component={AccountOrders} exact />
                        <Route path="/AccountAddress" component={AccountAddress} exact />
                        <Route path="/AccountPayment" component={AccountPayment} exact />

                        <Route path="/DeliveryInfo" component={DeliveryInfo} exact />
                        <Route path="/SuccessInfo" component={SuccessInfo} exact />

                        <Route path="/OrderConfirm" component={OrderConfirm} exact />
                        <Route path="/PlaceOrder" component={PlaceOrder} exact />

                        <Route path="/Recommend" component={Recommend} exact />

                        <Route path="/Tracking" component={Tracking} exact />
                        <Route path="/LandingPage" component={LandingPage} exact />

                        <Route path="/AccountEditAddress" component={AccountEditAddress} exact />

                    </Switch>
             
            </div>
        );
    }
}

export default ReactRouter;