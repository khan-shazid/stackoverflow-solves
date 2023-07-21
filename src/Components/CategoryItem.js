import { Link } from 'react-router-dom';
import styles from './CategoryItem.module.css';

function CategoryItem({ data }) {
  const { name, description, avatar } = data;
  return (
    <li>
      <Link className={styles.categoryItem} to={`${name.toLowerCase()}`}>
        <img src={avatar} alt='Category Image' />
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
}

export default CategoryItem;
