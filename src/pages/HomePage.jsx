import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectAllCountries, selectCountriesInfo, selectVisibleCountries} from "../store_old_redux/countries/countries-selectors";
import Controls from "../features/controls/Controls";
import {loadCountries} from "../store_old_redux/countries/countries-actions";
import List from "../components/List";
import Card from "../components/Card";
import {selectControls, selectSearch} from "../store_old_redux/controls/controls-selectors";

const HomePage = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const countries=useSelector(state=>selectVisibleCountries(state,{search,region}))
    const {status,error,qty}=useSelector(selectCountriesInfo);
    const {search,region}=useSelector(selectControls)

    useEffect(() => {
    if(!qty){
    dispatch(loadCountries());
}
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
                            return(
                                <Card
                                key={c.name}
                                onClick{()=>navigate(`/country/${c.name}`)}
                                {...countryInfo}
                                />
                            )
                    })}
                </List>
            )}
            </>
    );
};

export default HomePage;
