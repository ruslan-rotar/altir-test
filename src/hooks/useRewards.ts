import { useEffect, useState } from "react";
import { RewardItem } from "../types/RewardItem";
import { getDataFromServer } from "../utils/getDataFromServer";

export const useRewards = (userName?: string) => {
  const [data, setData] = useState<RewardItem[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response: any = await getDataFromServer(userName);
        setData(response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [userName]);

  return { data, error, loading };
};
