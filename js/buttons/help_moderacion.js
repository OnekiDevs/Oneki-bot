const  { MessageEmbed } = require('discord.js');
module.exports.run = async (client, interact, params) => {
    const channel = await client.channels.fetch(interact.channel_id);
    const message = await channel.messages.fetch(interact.message.id);
    const embed = new MessageEmbed();
    const commands = require('../../src/commands.json').Moderacion;
    embed.setTimestamp();
    embed.setTitle('Lista de comandos de N Ξ O | Bot')
    embed.setDescription('**Categoria de Moderación**\n`<>` significa opcional\n`[]` significa obligatorio');
    for (const command in commands) {
        let cmd = commands[command];
        embed.addField(command, `*${cmd.description}*${cmd.alias.length>0?`\nAlias: \`${cmd.alias.join('` `')}\``:""}\nUso: \`${cmd.use}\``, true);
    }
    embed.setFooter(`${client.user.username} ${require('../../package.json').version}`, client.user.displayAvatarURL())
    embed.setThumbnail(client.user.displayAvatarURL())
    embed.setColor('RANDOM')
    client.api.channels(message.channel.id).messages(message.id).patch({ 
        data: {
            embed: embed,
            components: [
                {
                    type: 1,
                    components: [
                        {
                            style: 1,
                            label: 'Entretenimiento',
                            custom_id: 'help_entretenimiento',
                            type: 2
                        },
                        {
                            style: 1,
                            label: 'Ayuda',
                            custom_id: 'help_ayuda',
                            type: 2
                        },
                        {
                            style: 1,
                            label: 'Moderación',
                            custom_id: 'help_moderacion',
                            type: 2
                        }
                    ]
                }
            ]
        }
    });
    client.api.interactions(interact.id, interact.token).callback.post({
        data: {
            type: 6
        }
    });
}
module.exports.id = 'help_moderacion';