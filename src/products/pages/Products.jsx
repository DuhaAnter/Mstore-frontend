import { useEffect, useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import { allproducts } from "../api/products";
import { FaChevronDown } from "react-icons/fa6";
import { allCates, allSubCatesInACate } from "../api/categories";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cates, setCates] = useState([]);
  //state for each subcategory
  const [subCates, setSubCates] = useState({});
  //we need to remember the open/closed state for every single category. hence the {}
  const [openCategories, setOpenCategories] = useState({});
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState("");
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await allproducts();
        //console.log("✅ API Response of all products:", data);
        setProducts(data);
      } catch (error) {
        console.log(error);

        //setError(error);
      } finally {
        setLoading(false);
      }
    };
    const fetchAllCates = async () => {
      try {
        const data = await allCates();
        //console.log("✅ API Response of all cates:", data.data);
        setCates(data.data);
      } catch (error) {
        console.log("error fetching all cates", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
    fetchAllCates();
  }, []);

  //it's not ideal to call fetchAllSubCatesInACate() directly inside the same useEffect if it needs a category ID.

  // Fetch Subcategories for each Category
  useEffect(() => {
    if (!cates || cates.length === 0) return;

    const fetchAllSubCates = async () => {
      try {
        const subCatesMap = {};

        for (const category of cates) {
          const catId = category._id || category.id;

          if (!catId) continue;

          const response = await allSubCatesInACate(catId);

          subCatesMap[catId] = response?.data || response;
        }

        setSubCates(subCatesMap);
        console.log("✅ All subcategories loaded:", subCatesMap);
      } catch (error) {
        console.log("Error fetching subcategories:", error);
      }
    };

    fetchAllSubCates();
  }, [cates]);

  const toggleCategory = (catId) => {
    setOpenCategories(
      //current state (previous value) of openCategories
      (prev) => ({
        //Copy all existing categories.
        ...prev,
        //Flip the value of this specific category
        [catId]: !prev[catId],
      }),
    );
  };

  if (loading) return <div>Loading products...</div>;
  //if (error) return <div>{error}</div>;

  return (
    <div className=" md:grid grid-cols-4 p-5">
      <div className="header col-span-4 mb-5">
        <h1 className=" text-4xl font-bold py-5">Clothes</h1>
      </div>
      <div className="sidebar  hidden md:block pr-5">
        <ul className="text-lg border-t border-t-gray-400">
          {cates?.map((category) => {
            const catId = category.id;
            const subs = subCates[catId] || [];
            const isOpen = openCategories[catId] || false; // default is closed
            return (
              <div key={catId} className="border-b border-b-gray-400 py-2">
                <li
                  className="  flex justify-between items-center"
                  onClick={() => toggleCategory(catId)}
                >
                  <span>{category.name}</span>
                  <FaChevronDown
                    className={`fill-gray-400 cursor-pointer transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </li>
                {isOpen && (
                  <ul className="pl-5 mt-2 space-y-1">
                    {subs.map((sub) => (
                      <li key={sub.id} className="text-gray-600 ">
                        - {sub.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </ul>
      </div>
      <div className="products col-span-3 ">
        {/* products grid component */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          <ProductsGrid products={products}></ProductsGrid>
        </div>
      </div>
    </div>
  );
}
