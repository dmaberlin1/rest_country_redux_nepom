import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectAllCountries, selectCountriesInfo} from "../store/countries/countries-selectors";
import Controls from "../components/Controls";
import {loadCountries} from "../store/countries/countries-actions";
import List from "../components/List";

const HomePage = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const countries=useSelector(selectAllCountries)
    const {status,error,qty}=useSelector(selectCountriesInfo);

    useEffect(() => {
        dispatch(loadCountries());
    }, [qty,dispatch]);

    return (
        <>
         <Controls/>
            {error && <h2>Can't fetch data</h2>}
            {status==='loading'&& <h2>Loading...</h2>}
            {status==='received' &&(
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
            )}
            </>

    );
};

export default HomePage;
