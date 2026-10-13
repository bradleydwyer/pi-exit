import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

// /exit is an alias for the built-in /quit.
export default function exitAlias(pi: ExtensionAPI) {
	pi.registerCommand("exit", {
		description: "Quit Pi (alias of /quit)",
		handler: async (_args, ctx) => {
			ctx.shutdown();
		},
	});
}
