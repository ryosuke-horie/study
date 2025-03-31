import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { cursorRulesAgent } from "./agents/cursorRulesAgent";

export const mastra = new Mastra({
    agents: {
        cursorRulesAgent,
    },
    logger: createLogger({
        name: "GitHub Cursor Rules Agent",
        level: "info",
    }),
});