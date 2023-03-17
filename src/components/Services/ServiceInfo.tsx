import { services } from "data/services";
import { TitleH3, TextNormal } from "components/common/Typografy.styled";

type ServiceInfoProps = {
  selected: number
};

export const ServiceInfo: React.FC<ServiceInfoProps> = ({ selected }) => {
  return (
    <div>
      <TitleH3>{services[selected].title}</TitleH3>
      <TextNormal mB="0" >{services[selected].description}</TextNormal>
    </div>
  );
};