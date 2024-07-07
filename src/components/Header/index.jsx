const Header = () => {
  return (
    <header className="w-full h-20 bg-blue-primary flex justify-between items-center p-10">
      <img src="./public/logo.svg" alt="logo" className={"max-w-[200px] "} />
      <a
        href=""
        className="bg-white rounded-xl text-blue-primary font-bold  px-4 py-2 "
      >
        Longin
      </a>
    </header>
  );
};

export default Header;
