import { useForm } from "react-hook-form";

import propTypes from "prop-types";
import { useEffect } from "react";

const FormAvaliacao = ({ onSubmit, defaultValues, setIsOpen }) => {
  const form = useForm();

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data);

    if (data.nota > 5 || data.nota < 0) {
      alert("Nota deve ser entre 0 e 5");
      return;
    }

    onSubmit({
      ...defaultValues,
      avaliacao: data,
    });

    setIsOpen({
      [`avaliar${data.id}`]: false,
    });
  });

  useEffect(() => {
    if (defaultValues?.avaliacao) {
      form.reset({ ...defaultValues?.avaliacao });
    }

    return () => {
      form.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="form-container">
      <form>
        <input
          type="number"
          max={5}
          min={0}
          placeholder="Nota:"
          {...form.register("nota")}
        />

        <input
          type="text"
          placeholder="comentario:"
          {...form.register("comentario")}
        />
        <button onClick={handleSubmit}>Avaliar</button>
      </form>
    </div>
  );
};

FormAvaliacao.propTypes = {
  onSubmit: propTypes.func,
  defaultValues: propTypes.object,
  setIsOpen: propTypes.func,
};

export default FormAvaliacao;
