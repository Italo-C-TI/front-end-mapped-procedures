import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border: 2px solid;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  min-height: 150px;
  width: 800px;
  margin: 20px;
  word-break: break-all;
`;


export const ButtonDeleteCard = styled.button`
  cursor: pointer;
  display: flex;
  aling-items: center;
  justify-content: center;
  background: #ea1d2c;
  border-radius: 5px;
  border: 1px solid #232129;
  width: fit-content;
  height: 20px;
  color: #ffffff;
  position: relative;
  top: 10px;
  left: 85%;
`;

export const ButtonUtil = styled.button`
  cursor: pointer;
  background: #ea1d2c;
  color: #ffffff;
  border: 1px solid #232129;
  border-radius: 35px;
  width: 200px;
  padding: 10px 30px;
  height: 50px;
  position: relative;
  left: 0px;
  right: 0;
  top: 70%;
  bottom: 150px;
  margin-left: 10px;
  margin-right: 10px;
  word-break: normal;
`;

export const TitleRed = styled.h3`
  color: #ea1d2c;
`;

export const TitleWhite = styled.h3`
  color: #ffffff;
`;

export const Description = styled.p`
  color: #ffffff;
`;
