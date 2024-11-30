import axios from "axios";

let today = new Date();
let month = String(today.getMonth() + 1).padStart(2, "0");
let day = String(today.getDate()).padStart(2, "0");
let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

export const fetchTodayEvents = async () => {
  const response = await axios.get(url);
  return response.data.events;
};
