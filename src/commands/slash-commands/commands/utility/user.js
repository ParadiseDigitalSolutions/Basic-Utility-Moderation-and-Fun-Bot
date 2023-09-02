const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Provides User Information'),
    async execute(interaction) {
        await interaction.reply(`this command was run by ${interaction.user.username}, who joined the server ${interaction.member.joinedAt}`);
    },
};