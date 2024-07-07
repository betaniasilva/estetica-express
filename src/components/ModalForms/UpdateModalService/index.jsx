import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";
import useServices from "../../../hooks/useServices";
import { useEffect } from "react";
import InputField from "../../FormFields/InputField";
import CardItem from "../../CardItem";
import TextAreaField from "../../FormFields/TextAreaField";
import Modal from "../../Modal";
import transformCurrency from "../../../utils/transformCurrency";

const UpdateModalService = ({ service, setServices, isOpen, onClose }) => {
  const form = useForm({
    defaultValues: {
      nome: service.nome,
      descricao: service.descricao,
      valor: transformCurrency(service.valor),
      image: service.image,
    },
  });
  const { update } = useServices();

  const handleEdit = form.handleSubmit((data) => {
    const services = update(service.id, data);
    console.log(services);

    setServices(services);
    onClose();
  });

  useEffect(() => {
    form.reset({ ...service, valor: transformCurrency(service.valor) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={"bg-gray-600 w-fit"}>
      <div className="bg-gray-600  px-4 py-4">
        <div className="flex justify-center gap-20">
          <FormProvider {...form}>
            <div className={"text-left max-w-[300px] w-full"}>
              <InputField
                label={"Image URL: "}
                name={"image"}
                classNameInput={"bg-white"}
              />
              <InputField
                label={"Nome: "}
                name={"nome"}
                classNameInput={"bg-white"}
              />
              <TextAreaField
                label={"Descrição: "}
                name={"descricao"}
                maxLength={200}
                className="h-48 text-blue-primary bg-white"
              />
              <InputField
                label={"Valor: "}
                name={"valor"}
                classNameInput={"bg-white"}
              />
            </div>
          </FormProvider>
          <div>
            <CardItem
              item={{
                ...form.watch(),
              }}
            />
          </div>
        </div>
        <div className="mt-10 flex items-center gap-20">
          <button
            onClick={handleEdit}
            className="w-full  bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Salvar
          </button>
          <button
            onClick={onClose}
            className="w-full  bg-blue-primary text-white px-4 py-2 rounded-lg"
          >
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

UpdateModalService.propTypes = {
  service: PropTypes.object.isRequired,
  setServices: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpdateModalService;
