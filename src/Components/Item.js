function Item({ item }) {
  return (
    <li>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </li>
  );
}

export default Item;
