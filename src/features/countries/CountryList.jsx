import React from 'react';
import {useNavigate} from "react-router-dom";
import {useCountries} from "./use-countries";
import List from "../../components/List";
import Card from "../../components/Card";

const CountryList = () => {
    const navigate=useNavigate();

    const [countries,{error,status}]=useCountries()
    return (
        <>
            {error && <h2>Can't fetch data</h2>}
            {status==='loading' && <h2>Loading...</h2>}
            {status==='received' && (
                <List>
                    {countries.map((country)=>{
                        const countryInfo={
                            img:c.flags.png,
                            name:c.name,
                            info:[
                                {
                                    title:'Population',
                                    description:country.population.toLocaleString(),
                                },
                                {
                                    title:'Region',
                                    description: country.region,
                                },
                                {
                                    title:'Capital',
                                    description: country.capital,
                                },
                            ],
                        };

                        return(
                            <Card
                            key={country.name}
                            onClick={()=>navigate(`/country/${country.name}`)}
                            {...countryInfo}
                            />
                        );
                    })}
                </List>
            )}
        </>
    )
};

export default CountryList;
