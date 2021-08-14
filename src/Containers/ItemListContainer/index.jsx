import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { ProductsContext } from '../../Context/ProductsContext'
import { getFirestore } from "../../Firebase/client.jsx";
import { ItemList } from "../../Components/ItemList/index.jsx";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState();
  const [products, setProducts] = useState([]);
  const { productos } = useContext(ProductsContext);

  useEffect(() => {
    setLoading(true);
    const dataBase = getFirestore(); // Conexion a la base de datos
    const productsCollection = dataBase.collection("productos");
    async function getData() {
      if (category) {
        const response = await productsCollection
          .where("Categoria", "==", category)
          .get();
        if (response.size === 0) {
          alert("No hay productos disponibles!");
        } else {
          setProducts(response.docs.map((element) => element.data()));
          setLoading(false);
        }
      } else {
          setProducts(productos);
          setLoading(false);
        }
      }
    getData();
  }, [category, productos]);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader
            loading={loading}
            color={"red"}
            size={160}
            font-weight={"bolder"}
          />
          <div className="fw-bolder">Cargando productos...</div>
        </div>
      ) : (
        <ItemList productos={products} />
      )}
    </>
  );
};
