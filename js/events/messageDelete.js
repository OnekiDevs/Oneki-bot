// const client = require('../bot');
const db = require('firebase-admin').firestore();
const package = require('../../package.json');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "messageDelete",
    run: async (client, message) => {
        try {
            if (!message.author || message.author?.bot) return;
            if (!message.content) return;
            const snapshot = await db.collection(message.guild.id).doc("deleted").get();
            const canal = client.channels.cache.get(snapshot.data()?.channel);
            if (!canal) return;
            const embed = new MessageEmbed()
                .setTitle("Mensaje eliminado")
                .setColor("RANDOM")
                .addField("Autor del mensaje:", message.author, true)
                .addField("Eliminado En:", message.channel, true)
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                .addField("Escrito el:", message.createdTimestamp, true)
                .addField("Contexto", `[ir alcontexto](${message.url})`, true)
                .addField("Contenido:", message.content)
                .setFooter(`Kone Bot ${package.version}`, client.user.avatarURL());
            canal.send({
                content: message.author.id,
                embed: embed
            })
        } catch (error) {
            const CanalError = client.channels.cache.get('734497561485901906');
            CanalError.send(`Error en **messageDelete** <@&734599009414676551>\n${error.toString()}\nCanal: <#${message.channel.id}>\nServidor ${message.guild.name} / ${message.guild.id}`);
            console.log(error);
        }
    }
}