type responseItemType = {
  id: string;
  name: string;
};

export const fetchNames = async () => {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  // we need to define it as possibly empty
  let data: responseItemType[] | [] = [];
  let names: responseItemType[] | [] = [];
  try {
    const response = await fetch(url);
    data = (await response.json()) as responseItemType[];
  } catch (err) {
    // if the API call fails we return an empty array, so we don't need to verify the type later when mapping
    names = [];
  }
  names = data.map((item) => {
    return { id: item.id, name: item.name };
  });

  return names;
};
