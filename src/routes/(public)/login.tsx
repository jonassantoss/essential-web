import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { loginSchema } from "@/validation/schemas";
import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/login")({
  component: LoginPage,
});

function LoginPage() {
  const { login } = useAuth();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      const { email, password } = value;
      login(email, password);
    },
    validators: {
      onChange: loginSchema,
    },
  });

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-8">
      <div className="min-w-[400px] flex flex-col space-y-2 bg-white p-6 rounded-lg shadow-my-card">
        <header className="flex flex-col space-y-1">
          <h2 className="text-2xl font-semibold text-center">Login</h2>
          <p className="text-sm text-gray-600 text-center">Acesse sua conta</p>
        </header>
        <form
          className="flex flex-col space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <form.Field name="email">
            {(field) => (
              <div className="flex flex-col">
                <label className="text-md" htmlFor={field.name}>
                  Email:
                </label>
                <input
                  className="relative p-1 rounded-sm border border-gray-300 outline-none focus:border focus:border-primary"
                  style={{
                    borderColor:
                      field.state.meta.errors.length > 1
                        ? "#e7000b"
                        : field.state.meta.isValid
                        ? "#13284C"
                        : "",
                  }}
                  type="email"
                  name={field.name}
                  id={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {!field.state.meta.isValid && (
                  <p className="text-destructive italic" role="alert">
                    {field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          </form.Field>
          <form.Field name="password">
            {(field) => (
              <div className="flex flex-col">
                <label className="text-md" htmlFor={field.name}>
                  Senha:
                </label>
                <input
                  className="relative p-1 rounded-sm border border-gray-300 outline-none focus:border focus:border-primary"
                  style={{
                    borderColor:
                      field.state.meta.errors.length > 1
                        ? "#e7000b"
                        : field.state.meta.isValid
                        ? "#13284C"
                        : "",
                  }}
                  type="password"
                  name={field.name}
                  id={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {!field.state.meta.isValid && (
                  <p className="text-destructive italic" role="alert">
                    {field.state.meta.errors[0]?.message}
                  </p>
                )}
              </div>
            )}
          </form.Field>
          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </div>
  );
}
