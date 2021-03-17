import Title, { SubTitle } from "../styledComponents/Title";
import styled from "styled-components";
import Ellipse from "../assets/images/Ellipse.svg";
import Button from "../styledComponents/Button";

const AccountTitle = styled(Title)`
  text-align: center;
`;
// section container
const SectioStyled = styled.section`
  border: var(--border);
  margin-bottom: 75px;
  padding-bottom: 85px;
  padding-right: 20px;
  padding-left: 20px;
  background-image: var(--section-background);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// inside section container
const SectionContainer = styled.div`
  background-color: var(--section-inside-background);
  border: var(--border);
  width: 100%;
  padding: 30px;
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
`;
const AccountSubtitle = styled(SubTitle)`
  margin-top: 30px;
`;
// Img
const Img = styled.img`
  width: 5px;
  height: 5px;
  margin-right: 10px;
`;
// Bold Details
const BoldSubtitle = styled.p`
  color: var(--text-color);
  font-family: var(--font-family-bold);
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: ${(props) => props.marginTop && "20px"};
`;
// Text
const Text = styled.p`
  color: var(--text-color);
  font-family: var(--font-family-regular);
  font-size: 14px;
  line-height: 1.5;
  padding-left: ${(props) => props.paddingLeft && "15px"};
`;

const EditButton = styled(Button)`
  margin-top: 30px;
`;

function Account({ data, hhData }) {
  console.log("hh data", hhData.data);
  return (
    <>
      <AccountTitle>Profile</AccountTitle>
      <SectioStyled>
        <AccountSubtitle>HouseHold </AccountSubtitle>

        <SectionContainer>
          <BoldSubtitle>HouseHold ID</BoldSubtitle>
          <Text>
            <Img src={Ellipse} alt="Logo" /> {data.household_ID}
            <br />
          </Text>
          <BoldSubtitle>HouseHold Head</BoldSubtitle>
          {hhData.data.map((hh) => {
            if (hh.household_head === "") return null;
            else
              return (
                <div key={hh.userid}>
                  <Text>
                    <Img src={Ellipse} alt="Logo" /> {hh.household_head}
                    <br />
                  </Text>
                </div>
              );
          })}

          <BoldSubtitle marginTop>HouseHold Members</BoldSubtitle>
          {hhData.data.map((hh) => {
            if (hh.household_head) return null;
            else
              return (
                <div key={hh.userid}>
                  <Text>
                    <Img src={Ellipse} alt="Logo" /> {hh.household_member}
                    <br />
                  </Text>
                </div>
              );
          })}
        </SectionContainer>
      </SectioStyled>

      <SectioStyled>
        <AccountSubtitle>Personal Informations</AccountSubtitle>
        <SectionContainer>
          <BoldSubtitle>Barangay ID</BoldSubtitle>
          <Text paddingLeft>
            {data.barangayID_no} <br />
          </Text>
          <BoldSubtitle marginTop>Full Name</BoldSubtitle>
          <Text paddingLeft>
            {data.fullName} <br />
          </Text>
          <BoldSubtitle marginTop>Address</BoldSubtitle>
          <Text paddingLeft>
            {data.address} <br />
          </Text>
          <BoldSubtitle marginTop>Birthdate</BoldSubtitle>
          <Text paddingLeft>
            {data.birthDate} <br />
          </Text>
          <BoldSubtitle marginTop>Civil Status</BoldSubtitle>
          <Text paddingLeft>
            {data.civilStatus} <br />
          </Text>
          <BoldSubtitle marginTop>Gender</BoldSubtitle>
          <Text paddingLeft>
            {data.gender} <br />
          </Text>
        </SectionContainer>
        <EditButton>Edit Profile</EditButton>
      </SectioStyled>
    </>
  );
}

export default Account;
