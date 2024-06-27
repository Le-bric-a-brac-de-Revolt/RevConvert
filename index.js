const { Client } = require("discord.js")
const config = require("./config.json")
const client = new Client({
    intents: 32767,
    
})



client.login(config.TOKEN)

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})