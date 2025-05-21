import { Button } from "@/components/ui/button";
import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/login")({
  component: LoginPage,
});

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
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-8">
      <h1 className="text-2xl font-medium">Login</h1>
      <div className="w-1/6 bg-white p-6 rounded-lg shadow-2xl">
        <form
          className="flex flex-col space-y-4"
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
                  <label className="text-md" htmlFor={field.name}>
                    Email:
                  </label>
                  <input
                    className="relative p-1 rounded-sm border border-gray-300 outline-none focus:border focus:border-sky-300"
                    type="email"
                    name={field.name}
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  ></input>
                </div>
              );
            }}
          />
          <form.Field
            name="password"
            children={(field) => {
              return (
                <div className="flex flex-col">
                  <label className="text-md" htmlFor={field.name}>
                    Senha:
                  </label>
                  <input
                    className="relative p-1 rounded-sm border border-gray-300 outline-none focus:border focus:border-sky-300"
                    type="password"
                    name={field.name}
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  ></input>
                </div>
              );
            }}
          />
          <form.Subscribe
            children={(field) => {
              return <Button>Entrar</Button>;
            }}
          />
        </form>
      </div>
    </div>
  );
}
