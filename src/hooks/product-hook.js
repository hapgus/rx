import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";

export const useProductsHook = () => {
    return useContext(ProductContext)
}



export const useProductSearch = (products, initialQuery = '') => {
    const [query, setQuery] = useState(initialQuery);
    const [filteredResults, setFilteredResults] = useState([]);
  
    useEffect(() => {
      if (query) {
        const results = products.filter((product) => {
          const matchesBasicFields = (product.title?.toLowerCase().includes(query) ?? false)
            || (product.subtitle?.toLowerCase().includes(query) ?? false)
            || (product.category?.toLowerCase().includes(query) ?? false);
  
          const matchesSpecList = (list) => list?.some(spec => spec.toLowerCase().includes(query)) ?? false;
          const matchesSpecs = matchesSpecList(product.specList1)
            || matchesSpecList(product.specList2)
            || matchesSpecList(product.specList3)
            || matchesSpecList(product.specList4);
  
          const matchesColors = product.colors?.some(color => color.includes(query)) ?? false;
          const matchesLogos = product.logos?.some(logo => logo.includes(query)) ?? false;
  
          return matchesBasicFields || matchesSpecs || matchesColors || matchesLogos;
        });
        setFilteredResults(results);
      } else {
        setFilteredResults([]);
      }
    }, [query, products]);
  
    return { query, setQuery, filteredResults };
  };
  