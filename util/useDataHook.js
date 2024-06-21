import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios-instance";

const fetchData = async ({ queryKey }) => {
  const [, page] = queryKey;
  const limit = 10;
  const skip = (page - 1) * 10;
  const { data } = await axiosInstance.get(
    `/products?limit=${limit}&skip=${skip}`
  );
  console.log("DATA--", data);
  return data;
};

export const useData = (page) => {
  return useQuery({ queryKey: ["datakey", page], queryFn: fetchData });
};
