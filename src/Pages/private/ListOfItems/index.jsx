import Modal from "react-responsive-modal";
import CardItem from "../../../components/CardItem";
import Button from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";
import "react-responsive-modal/styles.css";
import { Fragment, useState } from "react";
import useMe from "../../../hooks/useMe";
import useAuthenticate from "../../../hooks/useAuthenticate";
import useServices from "../../../hooks/useServices";

const ListOfItems = () => {
  const [isOpen, setIsOpen] = useState({});
  const onCloseModal = (id) => setIsOpen({ [id]: false });

  const me = useMe();
  const { logout } = useAuthenticate();
  const { findAll } = useServices();

  const data = findAll((filter) => filter.companyId === me?.id);

  const [services, setServices] = useState(data);

  return (
    <body>
      <header className={"w-full bg-gray-800 mb-10"}>
        <div className="max-w-[1200px] h-full p-4 rounded-lg m-auto bg-gray-800 flex justify-between items-center">
          <h1 className={"text-white text-2xl font-bold"}>Lista de Serviços</h1>

          <div className="flex flex-col">
            <p className="font-bold">{me?.name}</p>
            <button
              className="w-fit bg-red-700 px-4 py-2 rounded-lg"
              onClick={logout}
            >
              Sair
            </button>
          </div>
        </div>
      </header>
      <main className={"w-full overflow-hiddeb"}>
        <div className="max-w-[1200px] h-full p-4 rounded-lg m-auto">
          <div className="flex item-center justify-between">
            <Input
              mode="primary"
              className={"bg-white"}
              placeholder="Filtro: "
            />
            <Button>Cadastrar Serviço +</Button>
          </div>

          <div
            className={
              "w-full flex flex-wrap items-center justify-center mt-20 gap-4"
            }
          >
            {services?.map((item) => (
              <Fragment key={item.id}>
                <button onClick={() => setIsOpen({ [item.id]: true })}>
                  <CardItem item={item} />
                </button>
                <Modal
                  open={isOpen[item.id]}
                  onClose={() => onCloseModal(item.id)}
                  center
                  closeIcon={<span className="text-white text-lg">X</span>}
                >
                  <CardItem item={item} isEditable setServices={setServices} />
                </Modal>
              </Fragment>
            ))}
          </div>
        </div>
      </main>
    </body>
  );
};

export default ListOfItems;
