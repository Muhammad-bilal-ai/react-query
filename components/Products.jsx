import { useData } from "@/util/useDataHook";
import ProductCard from "./product-card";

const Products = () => {
  const { data, isLoading, isError } = useData();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error Fetching Data</div>;

  const products = data || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.products.map((product) => (
        <ProductCard key={product.id} product={product.title} />
      ))}
    </div>
  );
};

export default Products;
