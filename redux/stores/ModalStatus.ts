// redux/modalStatus.ts
import { createSlice } from '@reduxjs/toolkit';

type ModalState = boolean;

const initialState: ModalState = false; 

const modalStatus = createSlice({
  name: 'modalOnOff',
  initialState,
  reducers: {
    openModal: (state) => true, // 모달 열기
    closeModal: (state) => false, // 모달 닫기
  },
});

export const { openModal, closeModal } = modalStatus.actions;
export default modalStatus.reducer;
