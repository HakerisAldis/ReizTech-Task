import { useEffect, useState } from "react";
import Country from "../types/country";

export interface ApiGetResult {
  data: Array<Country>;
  isLoading: boolean;
}

export const useApiGet = (url: string): ApiGetResult => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);

    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return {data, isLoading};
};