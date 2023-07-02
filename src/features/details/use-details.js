import {useDispatch, useSelector} from "react-redux";
import {selectDetails} from "../../store_old_redux/details/details-selectors";
import {useEffect} from "react";
import {clearDetails, loadCountryByName} from "./details-slice";

export const useDetails=(name)=>{
    const dispatch=useDispatch();
    const details=useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadCountryByName(name));

        return () => {
            dispatch(clearDetails());
        };
    }, [name,dispatch]);

    return details;
}