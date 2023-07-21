export default function Item({ item }) {
    return (
      <li>
        <p>{item.id}</p>
        <p>{item.title}</p>
      </li>
    );
  }