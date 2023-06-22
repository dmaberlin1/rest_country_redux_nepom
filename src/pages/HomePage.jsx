import React from 'react';
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate=useNavigate()
    const countries=[]
    return (
        <>
         <Controls/>
         <List>
             {countries.map((c)=>{
                 const countryInfo={
                     img:c.flags.png,
                     name:c.name,
                     info:[
                         {
                             title:'Population',
                             description:c.population.tooLocalString(),
                         },
                         {
                             title:'Region',
                             description:c.region,
                         },
                         {
                             title:'Capital',
                             description:c.capital,
                         }
                     ]
                 }
             })}
         </List>
        </>
    );
};

export default HomePage;
