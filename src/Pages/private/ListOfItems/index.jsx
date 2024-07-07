import CardItem from "../../../components/CardItem";
import Button from "../../../components/UI/Button";
import Input from "../../../components/UI/Input";
import { Fragment, useState } from "react";
import useMe from "../../../hooks/useMe";
import useServices from "../../../hooks/useServices";
import Header from "../../../components/Header";
import UpdateModalService from "../../../components/ModalForms/UpdateModalService";
import CreateModalService from "../../../components/ModalForms/CreateModalService";

const ListOfItems = () => {
  const [isOpen, setIsOpen] = useState({});
  const [createModalServiceIsOpne, setCreateModalServiceIsOpne] =
    useState(false);
  const onCloseModal = (id) => setIsOpen({ [id]: false });

  const me = useMe();
  const { findAll } = useServices();

  const data = findAll((filter) => filter.companyId === me?.id);

  const [services, setServices] = useState(data);

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
            />
            <Button onClick={() => setCreateModalServiceIsOpne(true)}>
              Cadastrar Serviço +
            </Button>
            <CreateModalService
              className={"bg-gray-600 w-fit"}
              isOpen={createModalServiceIsOpne}
              onClose={() => setCreateModalServiceIsOpne(false)}
              setServices={setServices}
            />
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

                <UpdateModalService
                  isOpen={isOpen[item.id]}
                  onClose={() => onCloseModal(item.id)}
                  className={"bg-gray-600 w-fit"}
                  service={item}
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
