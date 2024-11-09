// redux/modalStatus.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
  [key: string]: boolean; // 모달의 ID를 key로 사용
};

const initialState: ModalState = {}; 

const modalStatus = createSlice({
  name: 'modalOnOff',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state[action.payload] = true;
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalStatus.actions;
export default modalStatus.reducer;
