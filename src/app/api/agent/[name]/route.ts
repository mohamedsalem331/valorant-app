import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

const getAgentData = async (agent: string) => {
  const browser = await puppeteer.launch({ headless: "new" });
  try {
    const abilitiesList = [];
    const valorantPage = await browser.newPage();
    await valorantPage.goto(`https://playvalorant.com/en-us/agents/${agent}/`, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    // const abilityDetailsSelectors = await page.$$('.ability', { visible: true })
    await valorantPage.waitForSelector(
      ".SpecialAbilities-module--abilitiesContainer--1OHMg"
    );
    await valorantPage.waitForSelector(
      ".SpecialAbilities-module--videoWrapper--Ea58o"
    );

    const abilityDetailsSelectors = await valorantPage.$$(
      "ul.SpecialAbilities-module--abilitiesList--VefyK li"
    );

    for (const abilityHandle of abilityDetailsSelectors) {
      let abilityObject = {
        name: "",
        keybind: "",
        description: "",
        imageUrl: "",
        videoUrl: "",
      };
      const imageUrl =
        (await valorantPage.evaluate(
          (el) => el.querySelector("img")?.getAttribute("src"),
          abilityHandle
        )) || "";

      await abilityHandle.click();
      await valorantPage.waitForNetworkIdle();
      const videoUrl = await valorantPage.$eval(
        ".OverviewVideo-module--video--Ycy-y > video > source",
        (el) => el.src
      );
      const detailsSelector = await valorantPage.waitForSelector(
        ".SpecialAbilities-module--abilityDetailsWrapper--uBUQW"
      );

      const abilityKeyName =
        (await valorantPage.evaluate(
          (el) => el?.querySelector("h3")?.textContent,
          detailsSelector
        )) || "";
      const description =
        (await valorantPage.evaluate(
          (el) => el?.querySelector("p")?.textContent,
          detailsSelector
        )) || "";

      if (abilityKeyName) {
        const nameKeySplit = abilityKeyName.split("-");

        abilityObject.name = nameKeySplit[1].trim();
        abilityObject.keybind = nameKeySplit[0].trim();
        abilityObject.description = description.trim();
        abilityObject.imageUrl = imageUrl.trim();
        abilityObject.videoUrl = videoUrl.trim();
      }

      abilitiesList.push(abilityObject);
    }
    return abilitiesList;
  } catch (error) {
    console.log(error);
  } finally {
    browser.close();
  }
};

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const name = params.name;
  let data = await getAgentData(name);

  return NextResponse.json({ data });
}
