
export const btnHandeler =(dispatch, pageCount, stepsCount)=> {
  return {nextHandeler: () => {
    dispatch(pageCount(stepsCount + 1));
  },
  prevHandeler: () => {
    dispatch(pageCount(stepsCount - 1));
  },}
};
