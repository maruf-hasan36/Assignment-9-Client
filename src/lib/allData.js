export const getData = async (search = "", category = "") => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (category) params.append("category", category);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/ideas?${params.toString()}`,
  );

  return res.json();
};

export const gettendingData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/tending`);
  const idea = await res.json();
  return idea;
};

export const getDetails = async (id ,token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/ideas/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const result = await res.json();
  return result;
};

// My ideas (logged-in user)
export const getMyIdeas = async (email ,token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/my-ideas/${email}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};
