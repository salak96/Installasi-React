import axios from "axios";


export const Login = (data,callback) =>{
    axios.post("https://fakestoreapi.com/auth/login",data)  
    .then((res)=>{
     callback(true,res.data.token);
    })
    .catch((error)=>{
      callback(false,error);
    });
};