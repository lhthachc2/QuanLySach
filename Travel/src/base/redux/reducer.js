import { combineReducers } from "redux";
import HomeReducer from "modules/eCommerce/Home/redux/reducers";
import GeneralReducer from "./General/GeneralReducer";
import AuthReducer from "modules/Account/redux/reducers";
import AboutReducer from "../../modules/eCommerce/About/redux/reducers";
import PublishingReducer from "../../modules/eCommerce/Publishing/redux/reducers";
import AuthorReducer from "../../modules/eCommerce/Author/redux/reducers";
import CustomerReducer from "../../modules/eCommerce/Customer/redux/reducers";
import ReleaseReducer from "../../modules/eCommerce/Releasec/redux/reducers";
import TimeReducer from "../../modules/eCommerce/Promotion/redux/reducers";
import BillReducer from "../../modules/eCommerce/Bill/redux/reducers";
import BillDetailReducer from "../../modules/eCommerce/Billdetail/redux/reducers";
import InfoReducer from "../../modules/eCommerce/Notification/redux/reducers";
import ReveneuReducer from "../../modules/eCommerce/BieuDo/redux/reducers";

const rootReducer = combineReducers({
  GeneralReducer,
  HomeReducer,
  AuthReducer,
  AboutReducer,
  PublishingReducer,
  AuthorReducer,
  CustomerReducer,
  ReleaseReducer,
  TimeReducer,
  BillReducer,
  BillDetailReducer,
  InfoReducer,
  ReveneuReducer,
});
export default rootReducer;
