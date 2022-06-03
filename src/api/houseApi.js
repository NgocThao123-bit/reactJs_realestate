
import http from "./index";
const getAll = () => {
  return http.get("/listingHouse");
};
const getHouseById = id => {
  return http.get(`/house/${id}`);
};
const getHouseByType = type => {
    return http.get(`/houses/${type}`);
  };
  const getHousByLocation = location => {
    return http.get(`/location/${location}`);
  };
const create = data => {
  return http.post("/addHouse", data);
};
const update =  data => {
  return http.put(`/updateHouse`, data);
  // return http.put(`/addHouse/${id}`, data);
};
const remove = id => {
  return http.delete(`/delete/${id}`);
};
// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };
// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };
const HouseApi = {
  getAll,
  getHouseById,
  getHouseByType,
  getHousByLocation,
  create,
  update,
  remove,
//   removeAll,
//   findByTitle
};
export default HouseApi;