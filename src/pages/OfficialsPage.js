import Header from "../styledComponents/header";
import Footer from "../styledComponents/footer";
import Officials from "../components/Officials";

function OfficialsPage() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Officials />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default OfficialsPage;
