#Libreria discord.py
import discord
from discord.ext import commands

#Otras librerias relevantes
from PIL import Image, ImageDraw, ImageFont, ImageOps
from datetime import datetime, timedelta
from os import getenv, remove
from asyncio import sleep
from io import BytesIO
import json
import re

#Modulos del proyecto
from tools import db
from tools.roles import give_role_mute, remove_role_mute

<<<<<<< HEAD
bot = commands.Bot(command_prefix = "r!", description = "Bot aun NO oficial de la neo army", intents = discord.Intents.all())
=======
bot = commands.Bot(command_prefix = "r!", description = "Bot oficial de La Resistencia", intents = discord.Intents.all())
>>>>>>> 95bb7d98fdd39cabe5b87ed7161158b727df9baf
