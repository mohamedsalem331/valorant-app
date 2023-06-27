const useAgent = async (agent: string = "omen") => {
  const response = await fetch(`api/agent/${agent}`, {
    next: { revalidate: 3 * 24 * 60 * 60 }, // Revalidate every 3 days
  });
  console.log(response);
};

export default useAgent;
