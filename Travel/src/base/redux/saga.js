import { all } from "redux-saga/effects";
import General from "./General/saga";
import Home from "modules/eCommerce/Home/redux/sagas";
import Auth from "modules/Account/redux/sagas";
import About from "modules/eCommerce/About/redux/sagas";
import Publishing from "modules/eCommerce/Publishing/redux/sagas"
import Author from "modules/eCommerce/Author/redux/sagas"
import Customer from "modules/eCommerce/Customer/redux/sagas"
import Releasec from "modules/eCommerce/Releasec/redux/sagas"
import Promotion from "modules/eCommerce/Promotion/redux/sagas"
import Bill from "modules/eCommerce/Bill/redux/sagas"
import Billdetail from "modules/eCommerce/Billdetail/redux/sagas"
import Notification from "modules/eCommerce/Notification/redux/sagas"
import BieuDo from "modules/eCommerce/BieuDo/redux/sagas"

export default function* rootSaga() {
  yield all([
    General(),
    Home(),
    Auth(),
    About(),
    Publishing(),
    Author(),
    Customer(),
    Releasec(),
    Promotion(),
    Bill(),
    Billdetail(),
    Notification(),
    BieuDo(),
  ]);
}
