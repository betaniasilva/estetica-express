//R$1.000,00 => 1000.00
export const transformMoneyToNumber = (money) => {
  if (!money) return 0;
  return parseFloat(
    money.replace("R$", "").replace(/\./g, "").replace(",", ".")
  );
};
