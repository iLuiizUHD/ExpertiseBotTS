import { Message } from "discord.js";

export const command = {
	name: "ping",
	description: "This command is used to check if I'm alive!",
	async execute(ctx: Message): Promise<any> {
		ctx.react("😒");
		ctx.reply("🏓 Pong!");
		return;
	},
};
