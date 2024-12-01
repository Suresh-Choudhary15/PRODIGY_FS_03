import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/products/getAllCategories";
import { getProductByCategory } from "@/sanity/products/getProductsByCategory";

async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const products = await getProductByCategory(slug);
  const categories = await getAllCategories();
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-300 p-4">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}{" "}
          Collection
        </h1>
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}

export default CategoryPage;
