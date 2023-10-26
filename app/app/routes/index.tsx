import type { Context } from "sonik";

export default function Index(c: Context) {
  return c.render(
    <div>
      <h2>
        Hello <a href="/about/Por">Por</a>!
      </h2>
    </div>,
    {
      title: "Welcome to Por's page",
      meta: [{ name: "description", content: "This a portfolio page" }],
    }
  );
}
