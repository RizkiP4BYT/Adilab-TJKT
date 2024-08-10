import { ActivityType, Client } from 'discord.js'
import * as dotenv from 'dotenv'
dotenv.config()

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'MessageContent']
})

client.on('ready', () => {
    client.user?.setPresence({
        activities: [{ name: 'Informasi TJKT', type: ActivityType.Listening }],
        status: 'online'
    })
    console.log(`Welcome ${client.user?.username}`)
})

client.on('messageCreate', (message) => {
    if (message.content.startsWith('!ping')) {
        message.reply('Pong!')
    }

    if (message.channelId === '1271401116747173918' && message.author.id == '1271401194668949535') {
        console.log('Pesan masuk~')
        console.log(`Author: ${message.author.username}`)
        console.log(`Embeds: ${JSON.stringify(message.embeds[0])}`)
    }
})

client.login(process.env.DISCORD_TOKEN)
