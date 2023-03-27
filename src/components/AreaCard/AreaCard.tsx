import React from "react";
import { ContainerInfos, ContainerButtons } from "components/Containers";
import { useDeleteArea } from 'hooks'

import {
  ButtonDeleteCard,
  ButtonUtil,
  Card,
  Description,
  TitleWhite,
} from "./AreaCard.styles";
import { Props } from "./AreaCard.types";

export const AreaCard = ({ area, onClickEdit }: Props) => {
  const { handleDeleteArea } = useDeleteArea();

  return (
    <Card>
      <ContainerInfos>
        <TitleWhite>{area.name}</TitleWhite>
        <Description>{area.description}</Description>
      </ContainerInfos>
      <ContainerButtons>
          <ButtonDeleteCard
            onClick={() => handleDeleteArea(area.id)}
            role="delete-task"
          >
            X
          </ButtonDeleteCard>


        <ButtonUtil onClick={onClickEdit} role="edit-task">
          Edit
        </ButtonUtil>
          <ButtonUtil
            onClick={() => null}
            role="complete-task"
          >
            Click To Complete
          </ButtonUtil>

      </ContainerButtons>
    </Card>
  );
};
