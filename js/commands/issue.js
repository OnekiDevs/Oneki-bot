const { MessageEmbed } = require('discord.js')
const {OldCommand} = require('../scripts/exportClasses')
module.exports = class Issue extends OldCommand{

    constructor() {
        super({
            name: 'issue',
            aliases: ['feedback', 'bug'],
            permissions: {
                bot: [],
                member: []
            },
            cooldown: 0,
            args: []
        })

    }

    run(message, args) {
        if(!args) return message.reply('escribe tu bug/sugerencia')
        client.channels.cache.get(client.constants.channels.issues).send({
            embeds: [new MessageEmbed().setDescription(args.join(' ')).setAuthor(message.author.tag, message.author.displayAvatarURL()).setTitle(`Issue desde ${message.guild.name} | ${message.guild.id}`)],
        })
        message.reply('enviado')
    }

}