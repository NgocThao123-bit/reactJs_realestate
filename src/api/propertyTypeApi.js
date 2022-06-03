import http from "./index";
const getAll = () => {
  return http.get("/propertyType/propertyTypes");
};

const PropertyTypeApi = {
    getAll,
    // getHouseById,
    // getHouseByType,
    // getHousByLocation,
    // create,
  //   update,
  //   remove,
  //   removeAll,
  //   findByTitle
  };
  export default PropertyTypeApi;