from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

WEBAPP_URL = "https://sergay1.github.io/telegram-trap-game/"  # Твоя ссылка

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("ПОЛУЧИТЬ СИГНАЛ", web_app=WebAppInfo(url=WEBAPP_URL))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Главное меню:", reply_markup=reply_markup)

if __name__ == "__main__":
    TOKEN = "7565692850:AAGQ2Dhtx7s4zcfoC-FafSzAZog9CMrvqV8"

    app = ApplicationBuilder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))

    print("Бот запущен...")
    app.run_polling()
