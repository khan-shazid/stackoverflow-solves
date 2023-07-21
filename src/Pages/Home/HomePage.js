import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>Welcome to Shopping Center</h1>
        <Link to="/app">
          <button>Click Me</button>
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
