require("dotenv").config();
const { Client, IntentsBitField, InteractionCollector } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`🦤 ${c.user.tag} is dodoing`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "hello") {
    message.reply("Howdy!");
  }
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isChatInputCommand()) return;
  console.log(interaction);
});

client.login(process.env.TOKEN);
