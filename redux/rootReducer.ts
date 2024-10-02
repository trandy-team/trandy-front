// redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import ModalStatus from './stores/ModalStatus';

const rootReducer = combineReducers({
  modalStatus: ModalStatus,
  // 이 아래로 계속 추가
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
