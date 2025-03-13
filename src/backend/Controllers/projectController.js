import { fetchJsonData } from "./database";

export const loadAllProjectsData = async () => {
  let data = await fetchJsonData("projects");
  let dataArr = Object.values(data);
  return dataArr;
};
