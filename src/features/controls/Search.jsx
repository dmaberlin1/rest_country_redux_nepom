import React from 'react';
import styled from "styled-components";
import {IoSearch} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {selectSearch} from "../../store_old_redux/controls/controls-selectors";
import {setSearch} from "../../store_old_redux/controls/controls-action";
import {useSearch} from "./use-search";
const InputContainer=styled.label`
    background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;
  
  @media(min-width: 767px){
    margin-bottom: 0;
    width: 280px;
  }
`

const Input=styled.input.attrs({
    type:'search',
    placeholder:'Search for a country...',
})`
margin-left: 2rem;
  border: none;
  outline: none;
  color:var(--colors-text);
  background-color: var(--colors-ui-base);
`

const Search = () => {
const [search,handleSearch]=useSearch();


    return (
        <InputContainer>
            <IoSearch/>
            <Input onChange={handleSearch} value={search}/>
        </InputContainer>
    );
};

export default Search;
