import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type FlagsType = {
    items: any | null;
    totalItems: number;
    currentPage: number; // Added currentPage
    rowsPerPage: number;
    sortBy: string;
    filterBy: string[];
    isLoading: boolean;
    isError: boolean;
    searchValue: string;
};

const initialState: FlagsType = {
    items: null,
    totalItems: 0,
    currentPage: 1,
    rowsPerPage: 10,
    sortBy: "",
    filterBy: [""],
    isLoading: true,
    isError: false,
    searchValue: "",
};

const restaurantListSlice = createSlice({
    name: "restaurantList",
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<any | null>) => {
            state.items = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
            state.currentPage = 1
        },
        setTotalItems: (state, action: PayloadAction<number>) => {
            state.totalItems = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setIsError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        },
        setRowsPerPage: (state, action: PayloadAction<number>) => {
            state.rowsPerPage = action.payload;
        },
    },
});

export const {
    setItems,
    setCurrentPage,
    setSearchValue,
    setTotalItems,
    setIsLoading,
    setIsError,
    setRowsPerPage,
} = restaurantListSlice.actions;

export default restaurantListSlice.reducer;