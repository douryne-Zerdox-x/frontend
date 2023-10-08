import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Sign Up</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sign Up",
  meta: [
    {
      name: "sign up",
      content: "sign up",
    },
  ],
};
