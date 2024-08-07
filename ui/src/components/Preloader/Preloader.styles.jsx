import styled, { keyframes } from "styled-components"

const loader_width = "250px";
const loader_dot_size = "20px";
const color_one = "#8cc759";
const color_two = "#8c6daf";
const color_three = "#ef5d74";
const color_four = "#f9a74b";
const color_five = "#60beeb";
const color_six = "#fbef5a";

export const LoaderAnimatedDots = keyframes`
  15% {
    transform: translateX(0);
  }
  45% {
    transform: translateX(calc(${loader_width} - ${loader_dot_size}));
  }
  65% {
    transform: translateX(calc(${loader_width} - ${loader_dot_size}));
  }
  95% {
    transform: translateX(0);
  }
`

export const LoaderAnimatedText = keyframes`
  0% {
    content: "Loading";
  }
  25% {
    content: "Loading.";
  }
  50% {
    content: "Loading..";
  }
  75% {
    content: "Loading...";
  }
`

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: Helvetica, sans-serif;
`

export const LoaderItem = styled.div`
  height: ${loader_dot_size};
  width: ${loader_width};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`

export const LoaderDot = styled.div`
  animation: ${LoaderAnimatedDots} ease-in-out 3s infinite;
  height: ${loader_dot_size};
  width: ${loader_dot_size};
  border-radius: 100%;
  position: absolute;
  border: 2px solid white;
    
  &:first-child {
    background-color: ${color_one};
    animation-delay: 0.5s;
  }
  
  &:nth-child(2) {
    background-color: ${color_two};
    animation-delay: 0.4s;
  }
  
  &:nth-child(3) {
    background-color: ${color_three};
    animation-delay: 0.3s;
  }
  
  &:nth-child(4) {
    background-color: ${color_four};
    animation-delay: 0.2s;
  }
  
  &:nth-child(5) {
    background-color: ${color_five};
    animation-delay: 0.1s;
  }
  
  &:nth-child(6) {
    background-color: ${color_six};
    animation-delay: 0s;
  }
`

export const LoaderText = styled.div`
  position: absolute;
  top: 200%;
  left: 0;
  right: 0;
  width: 4rem;
  margin: auto;

  &:after {
    content: "Loading";    
    font-weight: bold;
    animation: ${LoaderAnimatedText} 3s infinite;
  }
`