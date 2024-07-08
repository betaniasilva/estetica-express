import useAuthenticate from "../../hooks/useAuthenticate";
import PropType from "prop-types";

const Header = ({ me }) => {
  const { logout } = useAuthenticate();

  console.log(me);

  return (
    <header className="w-full h-20 bg-blue-primary flex justify-between items-center p-10">
      <a href="/">
        <img src="./public/logo.svg" alt="logo" className={"max-w-[200px] "} />
      </a>

      {me ? (
        <div className="flex flex-col">
          <p className="font-bold">{me?.name}</p>
          <button
            className="w-fit bg-red-700 px-4 py-2 rounded-lg"
            onClick={logout}
          >
            Sair
          </button>
        </div>
      ) : (
        <a
          href="/authenticate"
          className="bg-white rounded-xl text-blue-primary font-bold  px-4 py-2 "
        >
          Login
        </a>
      )}
    </header>
  );
};

Header.propTypes = {
  me: PropType.object,
};

export default Header;
