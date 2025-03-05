import { Resend } from "resend";

export default {
  async fetch(request, env, ctx) {
    const resend = new Resend("re_34haVcsb_LAZPAh5qgfqfiHZrksLLwnwj");

    const { data, error } = await resend.emails.send({
      from: "hello@example.com",
      to: "yamaguchi@@google.com",
      subject: "Hello World",
      html: "<p>Hello from Workers</p>",
    });

    return Response.json({ data, error });
  },
};
