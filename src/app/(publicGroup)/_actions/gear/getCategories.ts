import { api } from "@/services/api";

export const getCategories = async () => {
  const res = await fetch(`${api}/api/categories`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  const data = await res.json();

  return data.data;
};
