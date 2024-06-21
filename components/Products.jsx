import { useData } from "@/util/useDataHook";
import ProductCard from "./product-card";
import { useState } from "react";

const Products = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useData(page);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error Fetching Data</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="mr-2 p-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="p-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
