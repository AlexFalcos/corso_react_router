import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: 0,
                name: "Tokio",
                description: "Breve descrizone della card di Tokio. Su due righe. Breve descrizone della card. Su due righe.",
                imgURL: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG9reW98ZW58MHx8MHx8fDA%3D",
                isVisited: false,
            },
            {
                id: 1,
                name: "New York",
                description: "Breve descrizone della card di New York. Su due righe. Breve descrizone della card. Su due righe.",
                imgURL: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV3JTIweW91cmt8ZW58MHx8MHx8fDA%3D",
                isVisited: false,
            },
            {
                id: 2,
                name: "Roma",
                description: "Breve descrizone della card di Roma . Su due righe. Breve descrizone della card. Su due righe.",
                imgURL: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9tZXxlbnwwfHwwfHx8MA%3D%3D",
                isVisited: true,
            },
            {
                id: 3,
                name: "Paris",
                description: "Breve descrizone della card di Parigi . Su due righe. Breve descrizone della card. Su due righe.",
                imgURL: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaWdpfGVufDB8fDB8fHww",
                isVisited: false,
            },
        ],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        }
    }
});

export const { add } = citiesSlice.actions;

export const citiesReducer = citiesSlice.reducer;