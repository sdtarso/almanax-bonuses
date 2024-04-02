export const getYearRange = () => {
  const start = new Date();
  const end = new Date();
  end.setFullYear(start.getFullYear() + 1);

  return { start, end };
};
