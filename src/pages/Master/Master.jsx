// import axios from 'axios';
import React, { useEffect } from 'react';
import AxiosApi from '../../components/Axios/AxiosApi';
import BasicExample from '../../components/Axios/BasicExample';
const axios  = require('axios');

const Master = () => {
    



    useEffect(() => {
       
    },[])
    return (
        <div>
            Master 
            <BasicExample/>
            <AxiosApi />
        </div>
    );
};

export default Master;