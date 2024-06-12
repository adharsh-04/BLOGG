import {createSlice,createAsyncThunk, isPending, current} from '@reduxjs/toolkit'
import axios from 'axios';
export const userAuthorLoginThunk=createAsyncThunk('user-author-login',async(userCredObj,thunkApi)=>{
    try{
    if(userCredObj.userType==='user'){
    
       let res=await axios.post('http://localhost:4000/userapi/login',userCredObj);
       console.log(res);
       if(res.data.message==='login success'){
        //store token in local storage
        localStorage.setItem('token',res.data.token);
       

       }
       else{
        return thunkApi.rejectWithValue(res.data.message);
       }
       return res.data;
    }
    if(userCredObj.userType==='author'){
        let res=await axios.post('http://localhost:4000/authorapi/login',userCredObj);
        console.log(res);
        if(res.data.message==='login success'){
            //store in local storage
            localStorage.setItem('token',res.data.token);

        }
        else{
            return thunkApi.rejectWithValue(res.data.message);
        }
        return res.data;
    }}
    catch(err){
        return thunkApi.rejectWithValue(err);
    }
})

export const userAuthorSlice=createSlice({
    name:"user-author-login",
    initialState:{
        isPending:false,
        loginUserStatus:false,
        currentUser:{},
        errorOccured:false,
        errMsg:''
    },
    reducers:{
        resetState:(state,action)=>{
            state.isPending=false;
            state.currentUser={};
            state.loginUserStatus=false;
            state.errorOccured=false;
            state.errMsg='';
        }
    },
    extraReducers:builder=>builder.addCase(userAuthorLoginThunk.pending,(state,action)=>{
        state.isPending=true;

    }).addCase(userAuthorLoginThunk.fulfilled,(state,action)=>{
        state.isPending=false;
        state.currentUser=action.payload.user;
        state.loginUserStatus=true;
        state.errMsg='';
        state.errorOccured=false;

    }).addCase(userAuthorLoginThunk.rejected,(state,action)=>{
        state.isPending=false;
        state.currentUser={};
        state.loginUserStatus=false;
        state.errMsg=action.payload;
        state.errorOccured=true;

    })
})

const {resetState}=userAuthorSlice.actions;
export default userAuthorSlice.reducer;