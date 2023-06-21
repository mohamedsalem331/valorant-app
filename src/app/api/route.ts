import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

async function getArtworkImage() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto("https://valorant.fandom.com/wiki/Omen");
  const image = await page.waitForSelector("div > .main-container");
  await browser.close();
  return image;
}

export async function GET() {
  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     next: { revalidate: 60 }, // Revalidate every 60 seconds
  //   });
  //   const data = await res.json();
  const result = await getArtworkImage();
  console.log(result);

  return NextResponse.json({ hello: "yes" });
}
