const db = () => {
  const users = [
    {
      id: 1,
      email: "teste@hotmail.com",
      password: "123456",
      type: "user",
    },
  ];

  const companies = [
    {
      id: 1,
      email: "manicure.avenida@hotmail.com",
      password: "123456",
      name: "Manicure Avenida",
      address: {
        street: "Gonçalves Chaves",
        number: 123,
        city: "Pelotas",
        state: "RS",
      },
      type: "company",
    },
    {
      id: 2,
      email: "manicure.laranjeiras@hotmail.com",
      password: "123456",
      name: "Manicure Laranjeiras",
      address: {
        street: "Gonçalves Chaves",
        number: 123,
        city: "Pelotas",
        state: "RS",
      },
      type: "company",
    },
  ];

  const services = [
    {
      id: 1,
      nome: "teste 123",
      descricao: "lorem".repeat(20),
      valor: "R$55.000",
      image: "https://placehold.co/200x200",
      companyId: 1,
    },
    {
      id: 2,
      nome: "teste 123",
      descricao: "lorem".repeat(50),
      valor: "R$55.000",
      image: "https://placehold.co/200x200",
      companyId: 1,
    },
    {
      id: 3,
      nome: "teste 123",
      descricao: "lorem".repeat(20),
      valor: "R$55.000",
      image: "https://placehold.co/200x200",
      companyId: 2,
    },
    {
      id: 4,
      nome: "teste 123",
      descricao: "lorem".repeat(20),
      valor: "R$55.000",
      image: "https://placehold.co/200x200",
      companyId: 2,
    },
  ];

  return {
    users,
    companies,
    services,
  };
};

export default db;
