import Header from "../../Components/Header";
import CategoryList from "../../Components/CategoryList";

import styles from "./AppLayout.module.css";

function AppLayout({ data, isLoading }) {
  return (
    <div className={styles.app}>
      <Header />
      <CategoryList data={data} isLoading={isLoading} />
    </div>
  );
}

export default AppLayout;
