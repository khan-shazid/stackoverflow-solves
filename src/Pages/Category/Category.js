import { useParams } from "react-router-dom";

import styles from "./Category.module.css";
import SideBar from "../../Components/SideBar";
import ItemList from "../../Components/ItemList";
// import { useEffect, useState } from 'react';

function Category({ data, isLoading }) {
  const { name } = useParams();

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Hello</p>
      ) : (
        <>
          <SideBar name={name} />
          <ItemList name={name} data={data} isLoading={isLoading} />
        </>
      )}
    </div>
  );
}

export default Category;
