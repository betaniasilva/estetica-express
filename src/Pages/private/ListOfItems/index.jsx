import Button from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";

const data = [
  {
    nome: "teste 123",
    descricao: "lorem".repeat(20),
    valor: "R$55.000",
  },
  {
    nome: "teste 123",
    descricao: "lorem".repeat(50),
    valor: "R$55.000",
  },
  {
    nome: "teste 123",
    descricao: "lorem".repeat(20),
    valor: "R$55.000",
  },
  {
    nome: "teste 123",
    descricao: "lorem".repeat(20),
    valor: "R$55.000",
  },
];

const ListOfItems = () => {
  return (
    <main className={"w-screen h-screen overflow-hiddeb"}>
      <div className="max-w-[1200px] h-full p-4 rounded-lg m-auto bg-gray-800">
        <div className="flex item-center justify-between">
          <Input mode="primary" className={"bg-white"} placeholder="Filtro: " />
          <Button>Cadastrar Serviço +</Button>
        </div>

        <div
          className={
            "w-full flex flex-wrap items-center justify-center mt-20 gap-4"
          }
        >
          {data?.map((item, index) => (
            <div
              key={index}
              className={"flex rounded-lg bg-blue-950 gap-4 p-4"}
            >
              <img
                src="https://placehold.co/200x200"
                alt={"New Alt"}
                className="w-[200px] h-[200px] rounded-lg"
              />
              <div className={"text-left w-[300px]"}>
                <h3 className="font-bold">{item.nome}</h3>
                <p className="break-words line-clamp-6">{item.descricao}</p>
                <p className="font-bold">{item.valor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ListOfItems;
