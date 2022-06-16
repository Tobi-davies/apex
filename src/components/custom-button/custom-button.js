import React from "react";
import styled from "@emotion/styled";

const GetStartedBtn = styled.button`
  outline: none;
  padding: 10px 12px;
  background-color: #fb8e0b;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.4s ease;

  &:hover {
    background-color: #fd6003;
  }
`;

const CustomBtn = ({ children }) => {
  return <GetStartedBtn>{children}</GetStartedBtn>;
};

export default CustomBtn;
