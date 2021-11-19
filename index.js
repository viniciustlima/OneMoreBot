const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
const config = require('./config.json')

const command = require('./command')

client.on('ready', () => {
	console.log(`Client is ready! @${client.user.username}`)
})

command(client, 'ping', (message) => {
	console.log(message)
})

client.login(config.token)
