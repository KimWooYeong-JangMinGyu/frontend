const useUserInfo = () => {
  const getByEmail = (email: string) => {
    // TODO : react query를 활용하여 API 호출
    console.log(email);
    return null;
  };

  return { getByEmail };
};

export default useUserInfo;