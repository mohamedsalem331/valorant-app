import { valorantAgents } from "../../../constant";

const useAgent = async (agent: keyof typeof valorantAgents = "omen") => {
  const res: any = await fetch(`http://localhost:3000/api/agent/${agent}`, {
    next: { revalidate: 3 * 24 * 60 * 60 }, // Revalidate every 3 days
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export default useAgent;
