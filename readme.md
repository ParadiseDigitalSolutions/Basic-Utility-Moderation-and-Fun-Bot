Introduction
Welcome to the README for your Discord bot! This README is designed to provide a quick and informative guide to help users understand your bot's functionality, how to set it up, and how to use it effectively.

Bot Overview
This Discord bot is built using the Discord.js library and utilizes slash commands to provide utility and moderation features for your server. The available commands include ping, kick, prune (message deletion), user (get user info), and server (get server info).

Features
Slash Commands
/ping

Description: Check the bot's latency and responsiveness.
Usage: /ping
/kick

Description: Kick a member from the server.
Usage: /kick @user
/prune

Description: Delete a specified number of messages from a channel.
Usage: /prune <number>
/user

Description: Get information about a specific user.
Usage: /user @user
/server

Description: Get information about the current server.
Usage: /server
Setup
Follow these steps to set up and run the bot on your server:

Prerequisites

Install Node.js: Node.js Installation Guide
Create a Discord Developer Application: Discord Developer Portal
Clone the Repository

Clone this repository to your local machine using git clone.
Install Dependencies

Open a terminal in the bot's directory and run npm install to install the necessary dependencies.
Configure the Bot Token

Create a config.json file in the root directory and add the following:
json
Copy code
{
	"clientId": "ID",
	"guildId": "ID",
	"token": "TOKEN"
}

Replace YOUR_BOT_TOKEN_HERE with your bot's token. This bot uses slash commands by default
Run the Bot

In the terminal, run "node ." or "node index.js" to start the bot.
Invite the Bot to Your Server

Visit the Discord Developer Portal and navigate to your bot's settings. Generate an OAuth2 URL with the "bot" and "applications.commands" scopes and appropriate permissions. Use this URL to invite the bot to your server.
Bot Commands

Use the slash commands listed above to interact with the bot.
Support and Issues
If you encounter any issues with the bot or have questions, feel free to contact the bot developer or visit the support channel in https://discord.gg/NH2cWGEGvV or visit us at https://pdsolutions.dev

Contributing
Contributions to this bot are welcome! If you have suggestions for new features or improvements, please submit a pull request or open an issue on the GitHub repository.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Thank you for using this Discord bot! We hope it enhances your server's functionality and moderating capabilities. If you have any feedback or suggestions, please don't hesitate to let us know. Enjoy using your new bot!