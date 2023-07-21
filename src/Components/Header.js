import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <h2>Categories</h2>
      <input type='text' placeholder='Enter your category' />
    </div>
  );
}

export default Header;
