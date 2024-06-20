import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axios-instance";

const fetchData = async () => {
  const { data } = await axiosInstance.get("/products");
  console.log(data);
  return data;
};

export const useData = () => {
  return useQuery({ queryKey: ["datakey"], queryFn: fetchData });
};
