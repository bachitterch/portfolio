import { type Dependencies } from "src/server/utils";

export interface SubscriptionResponse {
  id: number;
  state: string;
  created_at: string;
  source: string | null;
  referrer: null;
  subscribable_id: number;
  subscribable_type: string;
  subscriber: {
    id: number;
  };
}

export async function createSubscription(
  email: string,
  deps: Dependencies,
): Promise<SubscriptionResponse | string> {
  const res: Response = await fetch(
    "https://api.convertkit.com/v3/forms/3869350/subscribe",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: deps.env.CONVERTKIT_API_KEY,
        email,
      }),
    },
  );

  if (res.status !== 200) {
    throw new Error(`Please try again! :(`);
  }

  return res.json();
}
