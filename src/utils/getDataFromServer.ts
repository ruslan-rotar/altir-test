import mockData from "../mock/MOCK_DATA.json";

export const getDataFromServer = async (userName?: string) => {
  return await new Promise((resolve) => {
    let data = mockData;
    if (userName) {
      data = data.filter((item) => item.receiver === userName);
    }
    setTimeout(() => resolve({ data }), 2000);
  });
};
