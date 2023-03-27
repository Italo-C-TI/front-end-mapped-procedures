import styled, { css } from 'styled-components';


export const BackgroundModal = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(145, 154, 150, 0.3);
    backdrop-filter: blur(4px);
    overflow-y: scroll;
  
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
  }`


export const Modal = styled.div` {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 600px;
    min-height: 400px;
    left: 474px;
    top: 247px;

    background: #ffffff;
    border-radius: 30px;
}`

export const Body = styled.p`
    display: inline-block;
    margin: 0;
    font-size:16px;
    white-space: pre-line;
`;

export const Footer = styled.div`
  margin-top: 40px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Buttons = styled.div``;

export const ConfirmButton = styled.button`
  cursor: pointer;
  background: #ea1d2c;
  color: #ffffff;
  border: 1px solid #232129;
  border-radius: 35px;
  width: 200px;
  padding: 10px 30px;
  height: 50px;
  bottom: 150px;
  margin-left: 16px;
  margin-right: 10px;
  word-break: normal;
`;


export const Container = styled.div`
  position: relative;
`;

export const Heading = styled.h1`
    display: inline - block;
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 12px;
`;

export const Header = styled.div`
display: flex;
flex - direction: row;
flex - wrap: wrap;
gap: 16px;
align - items: center;
justify - content: space - between;
flex - direction: row;
`;

const ICON_SIZE = '24px';
const SPACE = '-16px';

export const CloseButton = styled.span`
    cursor: pointer;
    position: absolute;
    left: calc(100 % - ${ICON_SIZE} - ${SPACE});
    top: ${SPACE};
`;
