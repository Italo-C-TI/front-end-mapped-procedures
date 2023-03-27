import { AreaCard } from "components";
import { useGetAreas } from "hooks/useGetAreas";
import { Area } from "models";
import { Container } from "./Areas.styles";
import { Props } from "./Areas.types";



export const Areas = ({ onClickEdit }: Props) => {
  const { areasList, isError, isLoading, refresh } = useGetAreas();
  console.log(areasList);

    return (
      <Container data-testid="@Areas">
        {isLoading && <h3>carregando..</h3>}
        {isError && <h3>Ocorreu algum problema : </h3>}
        {areasList?.map((area : Area) => (
          <AreaCard
            key={area.id}
            area={area}
            onClickEdit={() => onClickEdit(area)}
          />
        ))}

          
      </Container>
    );
  };
  