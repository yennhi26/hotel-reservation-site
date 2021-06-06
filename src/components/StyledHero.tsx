import styled from "styled-components";

export const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props: any) => props.img}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;