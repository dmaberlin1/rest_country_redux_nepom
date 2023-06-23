import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentCountry} from "../store/details/details-selectors";
import {Button} from "../components/Button";
import Info from "../components/Info";
import {clearDetails, loadCountryByName} from "../store/details/details-actions";

const Details = () => {
    const dispatch=useDispatch()
    const {name}=useParams()
    const navigate=useNavigate();
    const {currentCountry,error,status}=useSelector(selectCurrentCountry);

    useEffect(()=>{
        dispatch(loadCountryByName(name));

        return()=>{
            dispatch(clearDetails())
        }
    },[name,dispatch])

    return (
        <div>
            <Button onClick={()=>navigate(-1)}>
            <IoArrowBack/>Back
            </Button>
            {status==='loading' &&<h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {currentCountry && <Info push={navigate} {...currentCountry}/>}
        </div>
    );
};

export default Details;
