import React from 'react';

const Service = ({service}) => {
    return (
       <div >
         <div className="card card-side bg-base-100 drop-shadow-2xl my-5 mx-5">
        <figure><img src={service.img} alt="Movie"/>
        
        </figure>
        <div className="card-body">
            
          <h2 className="card-title">{service.name}</h2>
          <p title={service.description}>
            {service.description.length > 20 ? service.description.slice(0,20)+ "...":service.description}
          </p>
          
          <div className="card-actions justify-end">
            <p className='font-bold'>Price:${service.price}</p>

            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Service;