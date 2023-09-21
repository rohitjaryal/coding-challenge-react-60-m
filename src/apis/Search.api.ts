import { fetchRequest } from "../pluginIns/axios";
import { SearchResponse } from "../types/search";

const MODEL_ID = "gpt-3.5-turbo";
export async function fetchSearchResult(
  message: string,
): Promise<SearchResponse> {
  return fetchRequest.post("/v1/chat/completions", {
    model: MODEL_ID,
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });
}
