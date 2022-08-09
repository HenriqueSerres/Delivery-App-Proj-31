import React, { useState, useEffect } from 'react';
import { getAxiosRequest } from '../../services';

function ContextProducts() {
  const [productsData, setProductsData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getInfoProducts = async () => {
      const getData = await getAxiosRequest();
      setProductsData(getData);
    };
    getInfoProducts();
  }, [productsData]);

  const contextProductsObj = {
    productsData,
    total,
    setTotal
  };

  return { contextProductsObj };
}

export default ContextProducts;
