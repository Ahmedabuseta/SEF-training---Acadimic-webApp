import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchUsers = createAsyncThunk(
//     "usersSlice/fetchUsers",
//     async () => {
//       const response = await api('/products/categories'
//       );
//       return response.data;
//     }
//   );

export const UsersSlice= createSlice({
    name:"UsersSlice",
    initialState:[
        {
            fName: 'ahmed',
        lName: 'ahmed',
        status: 'inActive',
        email: 'ahmed@gmail',
        role: 'instructor',
        mobNum: '01090251773',
        userId: 2,
        password: '123456',
        passwordConfirmation: '123456',
        score: 20,
        online:false,
        },
        {
        fName: 'ahmed',
        lName: 'ahmed',
        status: 'Active',
        email: 'ahmed1@gmail',
        role: 'Admin',
        mobNum: '01090251773',
        userId: 2,
        password: '123456',
        passwordConfirmation: '123456',
        score: 20,
        online:false,
        },
        {
        fName: 'ahmed',
        lName: 'ahmed',
        status: 'Active',
        email: 'ahmed2@gmail',
        role: 'Student',
        mobNum: '01090251773',
        userId: 2,
        password: '123456',
        passwordConfirmation: '123456',
        score: 20,
        online:false,
      }
    ],
    reducers:{
        addUser:(state,action)=>{
                state.push({...action.payload,userId:state.length})
                const ids = state.map((user=>user.id))
            let index = state.findIndex(action.payload.id)
            ids?.includes(action.payload.id) ? state[index] = ({...action.payload,id:action.payload.id})
            : state.push({...action.payload,id:state.length})
        },
        setOnline:(state,action)=>{
            const index = state.findIndex(user=>user.id == action.payload)
            state[index].online = true;
            
             
        },
        removeUser:(state,action)=>{
            return state.filter(user=>user.userId!==action.payload.userId)
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchUsers.fulfilled, (state, action) => {
    //     state.all = action.payload;
    //     })}
})

export const {addUser,setOnline , removeUser} = UsersSlice.actions;
export default UsersSlice.reducer;