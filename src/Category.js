import ItemList from "./ItemList";

export default function Category({ data, isLoading }) {
    console.log("from category component ====>", data, isLoading)
    // const { name } = useParams();
    return (
      <div>
        {/* <SideBar name={name} /> */}
        <ItemList data={data} isLoading={isLoading} />
      </div>
    );
  }