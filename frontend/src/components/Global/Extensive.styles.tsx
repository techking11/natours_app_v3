import { Link } from "react-router-dom"
import styled from "styled-components"

export const ButtonLink = styled(Link)`
  color: #f7f7f7;
  text-transform: uppercase;
  font-size: 1.6rem;
  text-decoration: none;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  font-weight: 400;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  
  &:link,
  &:visited {
    color: #f7f7f7;
  }
    
  &:hover,
  &:active {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    text-shadow: 0 0.7rem 1rem black;
  }
    
  &:not(:last-child) {
    margin-right: 3rem;
  }
    
  &:focus {
    outline: none;
  }
`