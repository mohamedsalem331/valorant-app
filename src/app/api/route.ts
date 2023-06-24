import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {
  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     next: { revalidate: 60 }, // Revalidate every 60 seconds
  //   });
  //   const data = await res.json();
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto("https://valorant.fandom.com/wiki/Omen", {
      timeout: 0,
    });

    const image = await page.waitForSelector("body >>> .main-container");

    await browser.close();
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ hello: "yes" });
}
