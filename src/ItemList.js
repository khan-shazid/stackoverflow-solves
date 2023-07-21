import Item from "./Item";

export default function ItemList({ isLoading, data }) {
    const items = data.filter(
      (el) => el.id === 1,
    );

    console.log("data from ItemList ===>", data, isLoading, items)
  
    return (
      <ul>
        {items.map((el, i) => (
          <Item item={el} key={i} />
        ))}
      </ul>
    );
  }