import { useForm } from "react-hook-form";
const categorias = ["Ação", "Terror", "RPG", "Aventura", "MMO"];
import propTypes from "prop-types";

const FormCreate = ({ onSubmit }) => {
  const form = useForm();

  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data);
  });

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

        <button onClick={handleSubmit}>Criar</button>
      </form>
    </div>
  );
};

FormCreate.propTypes = {
  onSubmit: propTypes.func,
  setIsOpen: propTypes.func,
};

export default FormCreate;
