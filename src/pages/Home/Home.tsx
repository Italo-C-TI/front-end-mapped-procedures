import { ContainerCenter, HeaderPage } from "components";
import { Area } from "models";
import { Areas } from "modules/Areas";
import React, { useState } from "react";

export const Home = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  return (
    <ContainerCenter>
      <HeaderPage title="Areas" />
        
      {/* <FormTask editTask={false} task={selectedArea} /> */}
      <Areas onClickEdit={setSelectedArea} />

      {/* {selectedArea && (
        <ModalEditTask
          task={selectedArea}
          handleClose={() => setSelectedArea(null)}
        />
      )} */}
    </ContainerCenter>
  );
};
