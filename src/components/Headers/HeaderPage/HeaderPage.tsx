import React from "react";
import { Header } from "./Headers.styles";
import { Title } from "./HeaderPage.styles";
import { Props } from "./HeaderPage.type";

export const HeaderPage = ({ title }: Props) => {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
};
