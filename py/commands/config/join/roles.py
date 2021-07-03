from commands.config.join import index_subcommand as index 

@index.join.command()
@index.tools.commands.has_permissions(administrator = True)
async def roles(ctx, mode, role : index.tools.discord.Role):
    translations = index.tools.translations(index.tools.get_config(ctx), "commands/config/join")
    async with ctx.typing():
        collection = index.tools.db.ctx(f"{ctx.guild.id}")
        if(mode == "add"):
            if(collection.get("bienvenidas") == None):
                collection.set("bienvenidas", {"roles" : [f"{role.id}"]})
            else: collection.update("bienvenidas", "roles", f"{role.id}", array = True)
        elif(mode == "delete"): 
            collection.delete("bienvenidas", "roles", f"{role.id}", array = True)
    await ctx.send(translations["roles"])