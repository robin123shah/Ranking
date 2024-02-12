import { nonDlmMatches } from "./nonDlmMatches";
import { dlmMatches } from "./dlmMatches";
import { adjustments } from "./adjustments";

export var matches = [
  ...nonDlmMatches,
  ...dlmMatches,
  ...adjustments
];
