import { useActionState } from "react";

async function submitForm(previousState: unknown, formData: FormData) {
  const response = await fetch("/registration", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }

  return JSON.stringify(await response.json());
}

export function Form() {
  const [state, formAction, isPending] = useActionState(submitForm, undefined);

  return (
    <form action={formAction}>
      {isPending && <p>Loading...</p>}
      <p>{state}</p>
      <label htmlFor="name">
        Name
        <input type="text" name="name" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" />
      </label>
      <button>Submit</button>
    </form>
  );
}
