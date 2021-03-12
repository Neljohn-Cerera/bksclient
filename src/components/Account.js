import { useEffect, useState } from "react";
import Axios from "axios";
import Title, { SubTitle } from "../styledComponents/Title";
import styled from "styled-components";
import Ellipse from "../assets/images/Ellipse.svg";
import Button from "../styledComponents/Button";
import { connect } from "react-redux";

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

function Account(props) {
  const { userID } = props.userAccount;
  const [account, setAccount] = useState({});

  // useEffect
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/user/${userID}`)
      .then((result) => {
        setAccount(result.data[0]);
        // console.log("RETRIEVE ACCOUNT result : ", result);
      })
      .catch((err) => {
        console.log("Admin front end error", err);
      });
  }, [userID]);


  return (
    <>
      <AccountTitle>Profile</AccountTitle>
      <SectioStyled>
        <AccountSubtitle>HouseHold</AccountSubtitle>
        <SectionContainer>
          <BoldSubtitle>HouseHold Head</BoldSubtitle>
          <Text>
            <Img src={Ellipse} alt="Logo" /> Neljohn Rentillo Cerera <br />
          </Text>
          <BoldSubtitle marginTop>HouseHold Members</BoldSubtitle>
          <Text>
            <Img src={Ellipse} alt="Logo" /> Neljohn 1 Rentillo Cerera <br />
          </Text>
          <Text>
            <Img src={Ellipse} alt="Logo" /> Neljohn 2 Rentillo Cerera <br />
          </Text>
          <Text>
            <Img src={Ellipse} alt="Logo" /> Neljohn 3 Rentillo Cerera <br />
          </Text>
          <Text>
            <Img src={Ellipse} alt="Logo" /> Neljohn 4 Rentillo Cerera <br />
          </Text>
        </SectionContainer>
      </SectioStyled>

      <SectioStyled>
        <AccountSubtitle>Personal Informations</AccountSubtitle>
        <SectionContainer>
          <BoldSubtitle>Barangay ID</BoldSubtitle>
          <Text paddingLeft>
            {account.barangayID_no} <br />
          </Text>
          <BoldSubtitle>Household ID</BoldSubtitle>
          <Text paddingLeft>
            {account.houseHoldID_no} <br />
          </Text>
          <BoldSubtitle marginTop>Full Name</BoldSubtitle>
          <Text paddingLeft>
            {account.fullName} <br />
          </Text>
          <BoldSubtitle marginTop>Address</BoldSubtitle>
          <Text paddingLeft>
            {account.address} <br />
          </Text>
          <BoldSubtitle marginTop>Birthdate</BoldSubtitle>
          <Text paddingLeft>
            {account.birthDate} <br />
          </Text>
          <BoldSubtitle marginTop>Civil Status</BoldSubtitle>
          <Text paddingLeft>
            {account.civiStatus} <br />
          </Text>
          <BoldSubtitle marginTop>Gender</BoldSubtitle>
          <Text paddingLeft>
            {account.gender} <br />
          </Text>
          <BoldSubtitle marginTop>Household Head Relationship</BoldSubtitle>
          <Text paddingLeft>
            Father <br />
          </Text>
        </SectionContainer>
        <EditButton>Edit Profile</EditButton>
      </SectioStyled>
    </>
  );
}

//redux set up
const mapStateToProps = (state) => {
  return {
    userAccount: state.user.userAccount,
  };
};
export default connect(mapStateToProps, null)(Account);
