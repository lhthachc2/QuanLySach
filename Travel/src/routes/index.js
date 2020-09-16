import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "utils/asyncComponent";

const App = ({ match }) => {
  return (
    <div>
      <Switch>
        <div className="gx-main-content-wrapper">
          <Route exact path={`${match.url}home`} component={asyncComponent(() => import("./eCommerce/Home"))} />
          <Route path={`${match.url}about`} component={asyncComponent(() => import("./eCommerce/About"))} />
          <Route path={`${match.url}publishing`} component={asyncComponent(() => import("./eCommerce/Publishing"))} />
          <Route path={`${match.url}author`} component={asyncComponent(() => import("./eCommerce/Author"))} />
          <Route path={`${match.url}customer`} component={asyncComponent(() => import("./eCommerce/Customer"))} />
          <Route path={`${match.url}releasec`} component={asyncComponent(() => import("./eCommerce/Releasec"))} />
          <Route path={`${match.url}promotion`} component={asyncComponent(() => import("./eCommerce/Promotion"))} />
          <Route path={`${match.url}bill`} component={asyncComponent(() => import("./eCommerce/Bill"))} />
          <Route path={`${match.url}billdetail`} component={asyncComponent(() => import("./eCommerce/Billdetail"))} />
          <Route path={`${match.url}notification`} component={asyncComponent(() => import("./eCommerce/Notification"))} />
          <Route path={`${match.url}thongke`} component={asyncComponent(() => import("./eCommerce/BieuDo"))} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
