import Header from "../styledComponents/header";
import Footer from "../styledComponents/footer";
import Officials from "../components/Officials";
import useFirestore from "../hooks/useFirestore";
import officials from "../assets/css/officials/official.module.css";

function OfficialsPage() {
  const { docs } = useFirestore("images");
  console.log("officilas docs", docs);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className={officials.main}>
        <h4>Barangay Officials</h4>
        <Officials docs={docs} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default OfficialsPage;
