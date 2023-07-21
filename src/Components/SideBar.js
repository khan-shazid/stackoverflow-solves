import styles from './SideBar.module.css';

function SideBar({ name }) {
  return (
    <div className={styles.sidebar}>
      <h2>{name.toUpperCase()}</h2>
    </div>
  );
}

export default SideBar;
