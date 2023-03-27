import styled from "styled-components";

export const ContainerDefault = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerButtons = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  width: 40%;
  min-height: 150px;
`;

export const ContainerInfos = styled.div`
  background-color: #6f0000;
  color: #fff;
  padding: 30px;
  width: 60%;
  min-height: 150px;
  height: fit-content;
`;

export const ContainerRelative = styled.div`
  position: relative;
`;
