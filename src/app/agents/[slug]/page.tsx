import useAgent from "../../hooks/useAgent";
import { valorantAgents } from "../../../../constant";
import AbilityDetails from "@/app/components/AbilityDetails";
import Title from "@/app/components/Title";
import AgentCardSlider from "@/app/components/AgentCardSlider";
import AbilityList from "@/app/components/AbilityList";

const Home = async ({
  params,
}: {
  params: { slug: keyof typeof valorantAgents };
}) => {
  const name = params.slug;
  const data = await useAgent(name);
  const agentSelected = valorantAgents[name];
  const agentDetails = { ...agentSelected, name };

  console.log("server here", name);

  if (!data || !data.length) <h1>Loading Still</h1>;

  return (
    <>
      <section id="agents-slider">
        <AgentCardSlider />
      </section>

      <div className="mt-32">
        <Title description="" title="Abilities" icon={false} />
      </div>

      <section id="ability-details">
        <AbilityDetails data={data}>
          <AbilityList data={data} agentDetails={agentDetails} />
          <AbilityVideo data={data} />
        </AbilityDetails>
      </section>
    </>
  );
};

export default Home;

{
  /* <div className="w-full h-full flex justify-center -translate-y-[15rem]  ">
            <Image className="w-[100rem] h-auto " src={AgentImg} alt="AgentImg" />
          </div> */
}
