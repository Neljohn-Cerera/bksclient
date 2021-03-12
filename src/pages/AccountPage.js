import Header from "../styledComponents/header";
import Footer from "../styledComponents/footer";
import Account from "../components/Account";

function AccountPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Account />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AccountPage;
