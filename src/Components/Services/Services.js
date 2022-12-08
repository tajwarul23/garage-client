import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch("services.json")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
       <div>
        <h1  className='text-4xl text-gray-900 text-center mt-3 '>Our Services</h1>
         <div className='grid grid-cols-3 gap-4 mt-5'>
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
       </div>
    );
};

export default Services;