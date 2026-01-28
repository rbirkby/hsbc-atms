import { CopilotClient } from "@github/copilot-sdk"; 

const client = new CopilotClient(); 

const session = await client.createSession({ 
    model: "gpt-5", 
    skillDirectories: ["./skills"],
}); 
 
await session.sendAndWait({ prompt: "Analyze commits from this repo (github.com/rbirkby/hsbc-atms). Write a detailed summary in markdown of the changes in ATMs over time. Summarize interesting patterns and changes. Use skills to help." });

await client.stop();
