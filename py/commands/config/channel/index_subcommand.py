import tools
from tools.utils import commands

@tools.bot.group()
async def channel(ctx):
    #translations = tools.utils.translations(index.commands.get_config(ctx), "commands/report")
    if ctx.invoked_subcommand is None:
        await ctx.send("subcomadno invalido")