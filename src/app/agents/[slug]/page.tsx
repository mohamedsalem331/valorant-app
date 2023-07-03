import useAgent from "@/app/hooks/useAgent";
import { valorantAgents } from "../../../../constant";
import AbilityDetails from "@/app/components/AbilityDetails";
import Title from "@/app/components/Title";
import AgentCardSlider from "@/app/components/AgentCardSlider";
import AbilityList from "@/app/components/AbilityList";
import AbilityVideo from "@/app/components/AbilityVideo";
import { AgentDto } from "@/app/types";

// export async function generateStaticParams() {
//   return Object.keys(valorantAgents).map((key) => {
//     return { slug: key };
//   });
// }

const Home = async ({ params }: { params: { slug: string } }) => {
  const name = params.slug;
  const {
    data: { agentData },
  } = await useAgent(name);

  const agentSelected = valorantAgents[name];
  const agentDetails: AgentDto = {
    ...agentSelected,
    agent: name,
    biography: agentData.agentBiography,
  };

  if (!agentData || !agentSelected || !name)
    return (
      <h1 className="text-white text-6xl text-center mt-56">Loading Still</h1>
    );

  return (
    <>
      <section className="h-full" id="agents-slider">
        <AgentCardSlider
          //   agentAbilities={agentData.abilitiesList}
          agentDetails={agentDetails}
        />
      </section>

      <div className="mt-32">
        <Title
          description=""
          title="Abilities"
          icon={false}
          {...agentDetails}
        />
      </div>

      <section id="ability-details">
        <AbilityDetails
          agentAbilities={agentData.abilitiesList}
          agentDetails={agentDetails}
        />
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
