import styles from './ItemList.module.css';

import Item from './Item';

function ItemList({ name, data }) {
  if (!data.length) return <></>
  const items = data.filter(
    (el) => name.toLowerCase() === el.name.toLowerCase(),
  )[0].items;
  return (
    <ul className={styles.itemList}>
      {items.map((el, i) => (
        <Item item={el} key={i} />
      ))}
    </ul>
  );
}

export default ItemList;
