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
      id: "1",
      nome: "Manicure Simples",
      descricao:
        "Serviço de manicure simples, incluindo corte e lixamento de unhas.",
      valor: 30,
      image:
        "https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyId: 1,
      likes: 0,
    },
    {
      id: "2",
      nome: "Pedicure Completo",
      descricao:
        "Tratamento completo para os pés, incluindo esfoliação e hidratação.",
      valor: 45,
      image:
        "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyId: 1,
      likes: 0,
    },
    {
      id: "3",
      nome: "Corte de Cabelo Feminino",
      descricao: "Corte de cabelo feminino com lavagem e escova.",
      valor: 70,
      image:
        "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyId: 2,
      likes: 0,
    },
    {
      id: "4",
      nome: "Tintura de Cabelo",
      descricao: "Serviço de tintura de cabelo com produtos de alta qualidade.",
      valor: 120,
      image:
        "https://images.unsplash.com/photo-1619615787228-ce0fa8440e18?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyId: 2,
      likes: 0,
    },
    {
      id: "5",
      nome: "Escova Progressiva",
      descricao: "Tratamento de escova progressiva para alisamento de cabelo.",
      valor: 150,
      image:
        "https://plus.unsplash.com/premium_photo-1666990806921-a9bf7dc72efe?q=80&w=1346&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyId: 1,
      likes: 0,
    },
    {
      id: "6",
      nome: "Hidratação Capilar",
      descricao: "Tratamento de hidratação profunda para cabelos ressecados.",
      valor: 80,
      image:
        "https://images.unsplash.com/photo-1659391542239-9648f307c0b1?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyId: 2,
      likes: 0,
    },
    {
      id: "7",
      nome: "Design de Sobrancelhas",
      descricao: "Design e limpeza de sobrancelhas.",
      valor: 40,
      image:
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyId: 1,
      likes: 0,
    },
    {
      id: "8",
      nome: "Depilação a Laser",
      descricao: "Sessão de depilação a laser para áreas específicas.",
      valor: 200,
      image:
        "https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?q=80&w=1472&auto=format&fit=crop",
      companyId: 2,
      likes: 0,
    },
    {
      id: "9",
      nome: "Massagem Relaxante",
      descricao: "Sessão de massagem relaxante para alívio do estresse.",
      valor: 100,
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2574&auto=format&fit=crop",
      companyId: 1,
      likes: 0,
    },
    {
      id: "10",
      nome: "Maquiagem para Festas",
      descricao: "Serviço de maquiagem profissional para eventos e festas.",
      valor: 85,
      image:
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyId: 2,
      likes: 0,
    },
  ];

  return {
    users,
    companies,
    services,
  };
};

export default db;
