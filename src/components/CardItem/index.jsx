import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import InputField from "../FormFields/InputField";
import useServices from "../../hooks/useServices";

const CardItem = ({ item, isEditable, setServices }) => {
  const form = useForm({
    defaultValues: {
      nome: item.nome,
      descricao: item.descricao,
      valor: item.valor,
      image: item.image,
    },
  });
  const { update } = useServices();

  const handleEdit = form.handleSubmit((data) => {
    const services = update(item.id, data);
    console.log(services);

    setServices(services);
  });

  useEffect(() => {
    form.reset({ ...item });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return (
    <div className="bg-blue-primary p-4 rounded-lg">
      <div className={"flex rounded-lg gap-4"}>
        {isEditable ? (
          <FormProvider {...form}>
            <div className="flex flex-col gap-8">
              <img
                src={form.watch("image")}
                alt={"New Alt"}
                className="w-[200px] h-[200px] rounded-lg"
              />
              <InputField
                label={"Image URL: "}
                name={"image"}
                className={"!text-white"}
              />
            </div>
            <div className={"text-left w-[300px]"}>
              <InputField
                name={"nome"}
                className="px-4 py-2 font-bold bg-transparent"
              />
              <textarea
                {...form.register("descricao")}
                maxLength={200}
                className="px-8 py-2 w-full h-48 resize-none bg-transparent outline-none"
              />

              <InputField
                name={"valor"}
                className="px-4 py-2 font-bold bg-transparent"
              />
            </div>
          </FormProvider>
        ) : (
          <>
            <img
              src={item.image}
              alt={"New Alt"}
              className="w-[200px] h-[200px] rounded-lg"
            />
            <div
              className={"text-left w-[300px] flex flex-col justify-between"}
            >
              <div>
                <h3 className="font-bold">{item.nome}</h3>
                <p className="break-words line-clamp-6">{item.descricao}</p>
              </div>

              <p className="font-bold">{item.valor}</p>
            </div>
          </>
        )}
      </div>
      {isEditable && (
        <button
          onClick={handleEdit}
          className="bg-white text-blue-primary p-2 rounded-lg mt-10"
        >
          Salvar
        </button>
      )}
    </div>
  );
};

CardItem.propTypes = {
  item: PropTypes.object,
  isEditable: PropTypes.bool,
  setServices: PropTypes.func,
};

export default CardItem;
