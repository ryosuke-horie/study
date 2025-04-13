# MCPの基礎学習

## メモ

- MCPはリソースを通じてデータを公開する
- ツールを通じて機能を提供する
- プロンプトを通じてパターンを定義する

### リソース

LLMにデータを公開する方法。RESTのGETに似ている。
データを提供するが計算や副作用は出さない

### ツール

LLMがサーバーを通じアクションを実行できるようにする。副作用を持つ。

### プロンプト

LLM がサーバーと効果的に対話するのに役立つ再利用可能なテンプレートです。

### サーバーの実行

標準入出力を利用するかSSEを利用するか。今回は標準入出力のみ。

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "example-server",
  version: "1.0.0"
});

// ... set up server resources, tools, and prompts ...

const transport = new StdioServerTransport();
await server.connect(transport);
```