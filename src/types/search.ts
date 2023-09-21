export type Message = {
  role: String;
  content: String;
};

export type Choice = {
  index: Number;
  message: Message;
  finish_reason: String;
};

export type Usage = {
  prompt_tokens: Number;
  completion_tokens: Number;
  total_tokens: Number;
};

export interface SearchResponse {
  data: {
    id: string;
    object: string;
    created: Number;
    model: string;
    choices: Choice[];
    usage: Usage;
  };
}
