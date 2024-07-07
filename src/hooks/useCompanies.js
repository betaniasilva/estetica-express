import { v4 as uuidv4 } from "uuid";

const useCompanies = () => {
  const findAll = (filter) => {
    const companies = JSON.parse(localStorage.getItem("companies"));

    if (filter) {
      return companies.filter(filter);
    }
    return companies;
  };

  const findOne = (filter) => {
    const companies = JSON.parse(localStorage.getItem("companies"));

    return companies.find(filter);
  };

  const create = (company) => {
    const companies = JSON.parse(localStorage.getItem("companies"));

    company.id = uuidv4();

    companies.push(company);

    localStorage.setItem("companies", JSON.stringify(companies));

    return companies;
  };

  const update = (id, company) => {
    const companies = JSON.parse(localStorage.getItem("companies"));

    const index = companies.findIndex((company) => company.id === id);

    companies[index] = company;

    localStorage.setItem("companies", JSON.stringify(companies));

    return companies;
  };

  const remove = (id) => {
    const companies = JSON.parse(localStorage.getItem("companies"));

    const index = companies.findIndex((company) => company.id === id);

    companies.splice(index, 1);

    localStorage.setItem("companies", JSON.stringify(companies));

    return companies;
  };

  return { findAll, findOne, create, update, remove };
};

export default useCompanies;
