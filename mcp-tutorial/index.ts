import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// MCPサーバーを作成
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});

// ツールを追加
// 2つの数値を加算するツールを追加
server.tool("add",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);

// あいさつするツールを追加
server.resource(
  "greeting",
  new ResourceTemplate("greeting://{name}", { list: undefined }),
  async (uri, { name }) => ({
    contents: [{
      uri: uri.href,
      text: `Hello, ${name}!`
    }]
  })
);

// StdioTransportを使って接続
// StdioTransportは、標準入出力を使って接続するトランスポート
const transport = new StdioServerTransport();
await server.connect(transport);