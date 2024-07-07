import useMe from "./useMe";
import { v4 as uuidv4 } from "uuid";

const useServices = (setServices) => {
  const me = useMe();

  const findAll = (filter) => {
    const services = JSON.parse(localStorage.getItem("services"));

    if (filter) {
      return services.filter(filter);
    }
    return services;
  };

  const findOne = (filter) => {
    const services = JSON.parse(localStorage.getItem("services"));

    return services.find(filter);
  };

  const create = (service) => {
    const services = JSON.parse(localStorage.getItem("services"));

    service.id = uuidv4();
    service.companyId = me.id;
    service.likes = 0;

    services.push(service);

    localStorage.setItem("services", JSON.stringify(services));

    return services.filter((service) => service.companyId === me.id);
  };

  const update = (id, service) => {
    const services = JSON.parse(localStorage.getItem("services"));

    const index = services.findIndex((service) => service.id === id);

    services[index] = service;

    localStorage.setItem("services", JSON.stringify(services));

    return services.filter((service) => service.companyId === me.id);
  };

  const remove = (id) => {
    const services = JSON.parse(localStorage.getItem("services"));

    const index = services.findIndex((service) => service.id === id);

    services.splice(index, 1);

    localStorage.setItem("services", JSON.stringify(services));

    return services.filter((service) => service.companyId === me.id);
  };

  const like = (id) => {
    const services = JSON.parse(localStorage.getItem("services"));

    const index = services.findIndex((service) => service.id === id);

    services[index].likes = services[index].likes + 1;

    localStorage.setItem("services", JSON.stringify(services));

    setServices(services);
    return services;
  };

  return { findAll, findOne, create, update, remove, like };
};

export default useServices;
