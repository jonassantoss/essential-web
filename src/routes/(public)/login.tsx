import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/login")({
  component: LoginPage,
});

// TODO Rota de Login ainda não completamente implementada
function LoginPage() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      const { email, password } = value;
      handleSubmit(email, password);
    },
  });

  const handleSubmit = (email: string, password: string) => {
    console.log(email, password);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-medium">Login</h1>
      <div className="w-1/6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <form.Field
            name="email"
            children={(field) => {
              return (
                <div className="flex flex-col">
                  <label htmlFor={field.name}>Email</label>
                  <input
                    className="p-1 rounded-sm border border-gray-300"
                    type="email"
                    name={field.name}
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              );
            }}
          />
        </form>
      </div>
    </div>
  );
}
