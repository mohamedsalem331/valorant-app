import useAbilityStore from "@/lib/useAbilityStore";
import Ability from "./Ability";
import { AbilityDto, AgentDto } from "../types";

interface IAbilityListProps {
  agentAbilities: Array<AbilityDto>;
  agentDetails: AgentDto;
}

const AbilityList: React.FC<IAbilityListProps> = ({
  agentDetails,
  agentAbilities,
}) => {
  const setActiveHandler = useAbilityStore((state) => state.updateSelected);

  return (
    <>
      <div className=" relative h-[100px] w-full">
        <div className="flex overflow-hidden gap-14 ability-list z-10 ">
          {agentAbilities.map((abilityData: AbilityDto, idx: number) => (
            <div onClick={() => setActiveHandler(idx)} key={idx}>
              <Ability
                agentAbilities={agentAbilities}
                theme={agentDetails.theme}
                imageUrl={abilityData.imageUrl}
                name={abilityData.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AbilityList;
