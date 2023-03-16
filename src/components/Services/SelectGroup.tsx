import styled from "styled-components";
import { useState } from "react";
import { SelectBtn } from "components/buttons/SelectBtn";
import { services, ServiceType } from "../../data/services";

type SelectGroupProps = {
  selected: number
  selectHandler: (e: number) => void
}

const Content = styled.div`
  position: relative;
  margin: 0 0 50px 0;
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: none;
  }
`;

const OptionsGroup = styled.ul`
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: ${p => p.theme.colors.gray6};
`;

const Option = styled.li`
  padding: 0 10px;
  font-weight: ${p => p.theme.fontWeight.extra};
  font-size: 12px;
  line-height: 2.3;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    border-left: 4px solid black;
  }
`;

export const SelectGroup: React.FC<SelectGroupProps> = ({ selected, selectHandler }) => {
  const [showOpts, setShowOpts] = useState<Boolean>(false);

  const filtered = services.filter((item: ServiceType) => item.id !== selected)

  return (
    <Content>
      <SelectBtn
        title={services[selected].option}
        onClick={() => setShowOpts(prevstate => !prevstate)}
      />
      {showOpts && <OptionsGroup>
        {filtered.map((item: ServiceType) => {
          return <Option
            key={item.id} onClick={() => {
              selectHandler(item.id);
              setShowOpts(false);
            }}
          >
            {item.option}
          </Option>
        })}
      </OptionsGroup> }
    </Content>
  );
};