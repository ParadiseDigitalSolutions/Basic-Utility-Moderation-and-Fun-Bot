const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('Paradise Digital Solutions')
    .setDescription('Provides Information About The Server'),
    async execute(interaction) {
        await interaction.reply(`This Server Is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
    },
};