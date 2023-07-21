import styles from './CategoryList.module.css';

import CategoryItem from './CategoryItem';
import Spinner from './Spinner';

function CategoryList({ data, isLoading }) {
  console.log(isLoading);
  return (
    <div className={styles.categoryList}>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {data.map((el) => (
            <CategoryItem data={el} key={el.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryList;
