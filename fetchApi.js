const fetchAvatar = async () => {
  const response = await fetch(
    `https://api.dicebear.com/9.x/adventurer/svg?seed=nikolai`
  );
  const data = await response.text();
  return data;
};

export default fetchAvatar;
