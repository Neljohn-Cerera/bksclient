import Axios from "axios";

export const fetchUserInformation = async ({ queryKey }) => {
  const [, { userID }] = queryKey;
  const data = await Axios.get(
    `http://localhost:3001/api/user/client/info/${userID}`
  );
  return data.data;
};

export const fetchUserHousehold = async ({ queryKey }) => {
  const [, { hhID }] = queryKey;
  const data = await Axios.get(
    `http://localhost:3001/api/user/household/${hhID}`
  );
  return data.data;
};
