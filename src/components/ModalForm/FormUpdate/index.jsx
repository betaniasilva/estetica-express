import { useForm } from "react-hook-form";

const categorias = ["Ação", "Terror", "RPG", "Aventura", "MMO"];
import propTypes from "prop-types";
import { useEffect } from "react";

const FormUpdate = ({ onSubmit, defaultValues, setIsOpen }) => {
  console.log(defaultValues);
  const form = useForm();

  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data);

    setIsOpen({
      [`editar${data.id}`]: false,
    });
  });

  useEffect(() => {
    form.reset({ ...defaultValues });

    return () => {
      form.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Nome:" {...form.register("nome")} />
        <select {...form.register("categorias")}>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Valor:" {...form.register("valor")} />
        <input
          type="text"
          placeholder="Link imagem:"
          {...form.register("linkimg")}
        />
        <input
          type="text"
          placeholder="Descrição serviço:"
          {...form.register("descServ")}
        />
        <button onClick={handleSubmit}>Atualizar</button>
      </form>
    </div>
  );
};

FormUpdate.propTypes = {
  onSubmit: propTypes.func,
  defaultValues: propTypes.object,
  setIsOpen: propTypes.func,
};

export default FormUpdate;
