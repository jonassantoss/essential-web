import { z } from "zod";

const loginSchema = z.object({
	email: z
		.string()
		.nonempty("Por favor, insira um email")
		.regex(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			"Insira um email válido",
		),
	password: z
		.string()
		.nonempty("Por favor, insira uma senha")
		.min(6, "Insira uma senha com no mínimo 6 caracteres"),
});

export { loginSchema };
