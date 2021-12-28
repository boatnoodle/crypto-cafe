import { Button } from "antd";
import styled from "styled-components";
import theme from "theme/main";

export const ButtonStyled = styled(Button)`
  background: ${theme.colors.main};
  border-color: ${theme.colors.main};
  color: white;
  border-radius: 2rem;
  padding: 0 1.4rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;

  :active,
  :focus,
  :hover {
    border-color: ${theme.colors.secondary};
    background: ${theme.colors.secondary};
    color: white;
  }
`;

export const ButtonSecondaryStyled = styled(Button)`
  background: ${theme.colors.secondary};
  color: white;
  border-radius: 2rem;
  padding: 0 1.4rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;

  :active,
  :focus,
  :hover {
    border-color: ${theme.colors.secondary};
    background: ${theme.colors.white};
    color: ${theme.colors.secondary};
  }
`;

export const ButtonDangerStyled = styled(Button)`
  border-color: ${theme.colors.main};
  background: ${theme.colors.secondary};
  color: white;
  border-radius: 2rem;
  padding: 0 1.4rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;

  :hover {
    border-color: ${theme.colors.secondary};
    background: ${theme.colors.white};
    color: ${theme.colors.secondary};
  }
`;
