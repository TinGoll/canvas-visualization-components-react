import { styled } from "@mui/joy";

export const Main = styled("div")`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.body};
`;
