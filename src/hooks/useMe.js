const useMe = () => {
  const me = localStorage.getItem("me");

  if (me) {
    return JSON.parse(me);
  }

  return null;
};

export default useMe;
