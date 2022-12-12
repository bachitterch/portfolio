import type { Dependencies } from "src/server/utils";

export async function createSubscription(
  deps: Dependencies,
  email: string,
): Promise<string> {
  const res: Response = await fetch(
    "https://www.getrevue.co/api/v2/subscribers",
    {
      method: "POST",
      headers: {
        Authorization: `Token ${deps.env.REVUE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        double_opt_in: false,
      }),
    },
  );

  if (res.status !== 200) {
    throw new Error(`Please try again! :(`);
  }

  return res.json();
}
