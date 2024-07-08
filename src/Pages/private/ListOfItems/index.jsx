import { Fragment, useState } from "react";
import CardItem from "../../../components/CardItem";
import Button from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";
import useMe from "../../../hooks/useMe";
import useServices from "../../../hooks/useServices";
import Header from "../../../components/Header";
import ModalCreateService from "../../../components/ModalForms/ModalCreateService";
import useModal from "../../../hooks/useModal";

const ListOfItems = () => {
  const me = useMe();
  const { findAll } = useServices();

  const { modalState, openModal, closeModal } = useModal();
  const [createModalServiceIsOpne, setCreateModalServiceIsOpne] =
    useState(false);

  const data = findAll((filter) => filter.companyId === me?.id);

  const [services, setServices] = useState(data);

  const handleFilter = (e) => {
    const inputValue = e.target.value.toLowerCase();

    if (inputValue?.length > 0) {
      const newData = data.filter(
        (item) =>
          item?.nome?.toLowerCase()?.includes(inputValue) ||
          item?.descricao?.toLowerCase()?.includes(inputValue)
      );
      setServices(newData);
    } else {
      setServices(data);
    }
  };

  return (
    <body>
      <Header me={me} />
      <main className={"w-full overflow-hiddeb"}>
        <div className="max-w-[1200px] h-full p-4 rounded-lg m-auto">
          <div className="flex item-center justify-between">
            <Input
              mode="primary"
              className={"bg-white"}
              placeholder="Filtro: "
              onChange={handleFilter}
            />
            <Button onClick={() => setCreateModalServiceIsOpne(true)}>
              Cadastrar Serviço +
            </Button>
            <ModalCreateService
              className={"bg-gray-600 w-fit"}
              isOpen={createModalServiceIsOpne}
              onClose={() => setCreateModalServiceIsOpne(false)}
              setServices={setServices}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mt-4">Meus Serviços</h1>
            <p className="text-gray-500 text-sm">
              Total de serviços: {services?.length}
            </p>
          </div>

          <div
            className={
              "w-full flex flex-wrap items-center justify-center mt-20 gap-4"
            }
          >
            {services.length === 0 && (
              <div className="text-2xl font-bold text-center w-full">
                Nenhum serviço cadastrado
              </div>
            )}

            {services?.map((item) => (
              <Fragment key={item.id}>
                <CardItem
                  key={item.id}
                  item={item}
                  isEditable
                  isOpen={modalState.id === item.id}
                  modalType={modalState.type}
                  onClose={closeModal}
                  onOpen={(type) => openModal(item.id, type)}
                  setServices={setServices}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </main>
    </body>
  );
};

export default ListOfItems;
