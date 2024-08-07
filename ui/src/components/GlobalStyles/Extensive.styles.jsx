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
    
  &:hover {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem #00000026;
  }
  
  &:active {
    -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 0.5rem 1rem #00000026;
  }
    
  &:not(:last-child) {
    margin-right: 3rem;
  }
    
  &:focus {
    outline: none;
  }
`