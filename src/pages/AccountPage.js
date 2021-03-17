import { useState } from "react";
import Header from "../styledComponents/header";
import Footer from "../styledComponents/footer";
import Account from "../components/Account";
import { useQuery } from "react-query";
import { fetchUserInformation, fetchUserHousehold } from "../api/User";
import { connect } from "react-redux";

function AccountPage(props) {
  const { userID } = props.userAccount;
  const [hhID, setHhhid] = useState("");
  console.log("user id: ", userID);
  const userData = useQuery(["client", { userID }], fetchUserInformation, {
    onSuccess: (res) => {
      setHhhid(res[0].household_ID);
    },
  });
  const hhData = useQuery(["client", { hhID }], fetchUserHousehold);
  console.log("HHID :", hhID);
  console.log("use query data :", userData);
  console.log("household data :", hhData);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {userData.status === "loading" && <div>Loadinggs ...</div>}
        {userData.status === "error" && <div>error fetching </div>}
        {userData.status === "success" && hhData.status === "success" ? (
          <Account data={userData.data[0]} hhData={hhData} />
        ) : null}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

//redux set up
const mapStateToProps = (state) => {
  return {
    userAccount: state.user.userAccount,
  };
};
export default connect(mapStateToProps, null)(AccountPage);
