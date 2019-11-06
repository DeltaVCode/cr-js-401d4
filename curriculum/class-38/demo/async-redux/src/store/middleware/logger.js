export default store =>
  next =>
    action =>
    {
      console.log('STATE', store.getState());
      console.log('ACTION', action);
      let nextResult = next(action);
      console.log('NEXT STATE', store.getState());
      return nextResult;
    }