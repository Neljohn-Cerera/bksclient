import React from "react";
import styled from "styled-components";
import { Details } from "../Text";
import { SubTitle } from "../Title";
import Link from "../LinkTo";

const SectionStyled = styled.section`
  padding-top: ${(props) => props.bottom && "30px"};
  border: var(--border);
  background-color: var(--section-inside-background);
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 30px;
`;

const Detail = styled(Details)`
  margin: 0;
`;

function index() {
  return (
    <>
      <SectionStyled>
        <SubTitle>Go to</SubTitle>
        <Link text="Home" path="/" />
        <Link text="Request" path="/request" />
        <Link text="Records" path="/records" />
        <Link text="Guides" path="/guides" />
        <Link text="Barangay Officials" path="/barangayOfficials" />
        <Link text="About" path="/about" />
        <Link text="Contact" path="/contact" />
        <Link text="Account" path="/account" />
      </SectionStyled>

      <SectionStyled>
        <SubTitle>Offered Services</SubTitle>
        <Link text="Barangay Clearance" path="/" />
        <Link text="Barangay Certificate" path="/" />
      </SectionStyled>

      <SectionStyled>
        <SubTitle>Address</SubTitle>
        <Detail>
          Purok 6 <br />
          Barangay Bankas Heights <br />
          Toril District <br />
          Davao City <br />
        </Detail>
        <SubTitle>Need help?</SubTitle>
        <Detail>
          Tel Number : 555-5555-555-555 <br />
          Cel Number : 09xxxxxxxxx <br />
        </Detail>
      </SectionStyled>

      <SectionStyled bottom>
        <Link text="Privacy" path="/" />
        <Link text="Terms and User" path="/" />
        <Detail>@ 2020 Barangay Bankas Heights</Detail>
      </SectionStyled>
    </>
  );
}

export default index;
