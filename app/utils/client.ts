import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export const useData = <T>(endpoint: string) => {
  const { data, error } = useSWR(`http://localhost:8080/${endpoint}`, fetcher);

  return {
    data: data as T, //* as T は型アサーションでこれは型 T であると TypeScript に伝える
    isLoading: !error && !data,
    isError: error,
  };
};
