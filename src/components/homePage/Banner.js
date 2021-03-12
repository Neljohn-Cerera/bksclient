import styled from "styled-components";
import { Link as Linkk } from "react-router-dom";
import * as Section from "../../styledComponents/Container";
import Title from "../../styledComponents/Title";
import { Details } from "../../styledComponents/Text";
import Button from "../../styledComponents/Button";

const Link = styled(Linkk)`
  text-decoration: none;
`;

function Banner() {
  return (
    <Section.Main banner>
      <Title banner>BARANGAY ONLINE CERTIFICATION REQUEST</Title>
      <Details banner>
        You can now Request Barangay Certificates <br />
        Through online service. <br />
        - Hasle Free <br />- Service Free
      </Details>
      <Link to="/request">
        <Button banners>Request Now</Button>
      </Link>
    </Section.Main>
  );
}

export default Banner;
