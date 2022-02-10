import axios from 'axios';
import React from 'react';
import "./basicexample.module.css";

const BasicExample = () => {
    // basic example 
    const getUsers = () => {
        // Make a request  for users list 
        axios.get("https://react-deploy.rooberp.com/restaurant-backend/api/users")
        .then(response=>{
            // handle success
            console.log(response);
        })
        .catch(error=> {
            // handle error
            console.error(error);
        })
        .then(() => {
            // always execute 
            console.log('this is the final line');
        })
        console.log("I should  print before general req result")
    }
    // basic example  search parameters 
    const getUserInfo = () => {
        // Make a request  to get specific user details 
        // Here using of params is similar like  https://react-deploy.rooberp.com/restaurant-backend/api/user?id=2 , if we use params we can make the request as object
        axios.get("https://react-deploy.rooberp.com/restaurant-backend/api/users", {
            params:{
                id: 2,
            }
        })
        .then(response=>{
            // handle success
            console.log(response);
        })
        .catch(error=> {
            // handle error
            console.error(error);
        })
        .then(() => {
            // always execute 
            console.log('this is the final line');
        })
        
    }


    // use axios as async function to get user details
    const usersListAsync = async () => {
        // use async outer the function name 
        try{
            const response = await axios.get('https://react-deploy.rooberp.com/restaurant-backend/api/users');
            console.log(response);
            
        }
        catch(error){
            console.log(error);
        }
        console.log("I should not print before axios req result")
    }

    // POST REQUEST 
    const createNewTable = () =>{
        axios.post("https://react-deploy.rooberp.com/restaurant-backend/api/restaurant-tables", {
            "table_name": "TEST AXIOS -1 "
        })
        .then(response =>{
            console.log(response);
        })
        .catch(error=> {
            console.log(error)
        })
        .finally(() => {
            console.log("Final console of create new table func. ")
        })
    }
    //Performing multiple concurrent requests
    const getTableListes = () =>{
        return axios.get("https://react-deploy.rooberp.com/restaurant-backend/api/restaurant-tables")
    }
    const getReservationListes = () =>{
        return axios.get("https://react-deploy.rooberp.com/restaurant-backend/api/reservation-listes")
    }
    const MultipleRequest = () =>{
        // Here if any request get error then it will show handle error instead of handle success 
        Promise.all([getTableListes(), getReservationListes()])
        .then(response =>{
            console.log("TableListes", response[0])
            console.log("ReservationListes",response[1])
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <p>Basic Example Page</p>
            <button onClick={getUsers}>Basic Example of Axios</button>
            <button onClick={getUserInfo}>Use Of Search Parameters</button>
            <button onClick={usersListAsync}>Use axios as async</button>
            <button onClick={createNewTable}>POST - Create new table</button>
            <button onClick={MultipleRequest}> concurrent MultipleRequest</button>
          
        </div>
    );
};

export default BasicExample;