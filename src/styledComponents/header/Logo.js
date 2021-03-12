import styled from "styled-components";

const StyledHeaderLogo = styled.img`
  object-fit: contain;
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 25px;
  width: 25px;
`;
const StyledTitle = styled.p`
  font-family: "Lato Bold", sans-serif;
  font-size: 16px;
  color: var(--text-color);
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const HeaderLogo = ({ src }) => {
  return (
    <>
      <StyledHeaderLogo src={src} alt="Logo" />
      <StyledTitle>Bankas Heights</StyledTitle>
    </>
  );
};

export default HeaderLogo;
