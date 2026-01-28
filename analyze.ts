import { CopilotClient } from "@github/copilot-sdk"; 

const client = new CopilotClient(
    {
        logLevel: "all",
    }
); 

const session = await client.createSession({ 
    skillDirectories: ["./skills"],
}); 
 
const response = await session.sendAndWait({ prompt: "Analyze commits from this repo (github.com/rbirkby/hsbc-atms). Write a detailed summary in markdown of the changes in ATMs over time. Summarize interesting patterns and changes. Use skills to help." }, 5 * 60 * 1_000);
console.log(response?.data.content);

await client.stop();
