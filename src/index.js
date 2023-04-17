const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.login(
  "MTA5NzU5MzY1MjQ4NzkxMzU2Mw.GbltWp.K54a3OO_s5cFGlTTGibXykii_AoEqHtrfXy29s"
);
