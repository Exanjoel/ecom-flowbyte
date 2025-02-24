import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  selectedCategoryId: string | null;
  selectedAvailability: string | null;  // Example: "available", "out-of-stock"
  selectedPriceRange: [number, number] | null;  // Example: [min, max]
  selectedSize: string | null;  // Example: "S", "M", "L", "XL"
}

const initialState: FilterState = {
  selectedCategoryId: null,
  selectedAvailability: null,
  selectedPriceRange: null,
  selectedSize: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<string>) {
      state.selectedCategoryId = action.payload;
    },
    setAvailability(state, action: PayloadAction<string>) {
      state.selectedAvailability = action.payload;
    },
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.selectedPriceRange = action.payload;
    },
    setSize(state, action: PayloadAction<string>) {
      state.selectedSize = action.payload;
    },
    resetFilters(state) {
      state.selectedCategoryId = null;
      state.selectedAvailability = null;
      state.selectedPriceRange = null;
      state.selectedSize = null;
    },
  },
});

export const { setCategoryId, setAvailability, setPriceRange, setSize, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
