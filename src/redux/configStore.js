import { combineReducers, createStore } from 'redux';
import { BaiTapOanTuXiReducer } from './reducers/baiTapOanTuXiReducer'


//state trong redux là reducer
const rootReducer = combineReducers({
    //Các state ứng dụng sẽ được lưu tại đây
    BaiTapOanTuXiReducer: BaiTapOanTuXiReducer

});



export const store = createStore(rootReducer);