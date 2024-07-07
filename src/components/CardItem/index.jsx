import PropTypes from "prop-types";

const CardItem = ({ item }) => {
  return (
    <div className="bg-blue-primary p-4 rounded-lg">
      <div className={"flex rounded-lg gap-4"}>
        <img
          src={item.image}
          alt={"New Alt"}
          className="w-[200px] h-[200px] rounded-lg"
        />
        <div className={"text-left w-[300px] flex flex-col justify-between"}>
          <div>
            <h3 className="font-bold">{item.nome}</h3>
            <p className="break-words line-clamp-6">{item.descricao}</p>
          </div>
          <p className="font-bold">{item.valor}</p>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  item: PropTypes.object,
};

export default CardItem;
