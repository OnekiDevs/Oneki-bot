import tools
from tools import times

@tools.bot.event
async def on_ready():
    collection = tools.db.ctx("config")
    print("[*] Cargando...")
    tools.bot.command_prefix = collection.get("bot", "prefixes")
    print("[+] Prefijos cargados correctamente")
    tools.serv = tools.dic_servers()
    #tools.mutes = times.dic_mutes()
    print("[+] Diccionarios creados correctamente xd")
    #times.mutetime(tools.mutes)
    activity = tools.discord.Activity(type = tools.discord.ActivityType.watching, name = f"a {len(tools.bot.guilds)} servidores")
    await tools.bot.change_presence(status = tools.discord.Status.idle, activity = activity)
    print("[+] Estado configurado correctamente")
    print("El bot esta en accion!")
