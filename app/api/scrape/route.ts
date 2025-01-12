import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(req: NextRequest) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://lobehub.com/zh/assistants", { waitUntil: "networkidle2" });

    const data = await page.evaluate(() => {
      const assistants: { name: string; description: string }[] = [];
      const elements = document.querySelectorAll(".assistants-list .assistant-item");
      elements.forEach((element) => {
        const name = element.querySelector(".assistant-item-name")?.textContent?.trim() || "";
        const description =
          element.querySelector(".assistant-item-description")?.textContent?.trim() || "";
        assistants.push({ name, description });
      });
      return assistants;
    });

    await browser.close();
    console.log("Successfully scraped data:", data);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error scraping data:", error);
    let errorMessage = "Failed to scrape data";
    if (error instanceof puppeteer.errors.TimeoutError) {
      errorMessage = "Navigation timeout error";
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
