import { useEffect, useState } from "react";
import { ArrowUpRight, Check, AlertCircle } from "lucide-react";
import { ctaContent } from "../data";
import { joinWaitlist, getWaitlistCount } from "../services/waitlistService";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getWaitlistCount());
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    const result = await joinWaitlist(email);

    if (!result.ok) {
      if (result.reason === "rate-limit") {
        const seconds = Math.ceil(result.retryInMs / 1000);
        setMessage(`Too many attempts. Try again in ${seconds}s.`);
      } else {
        setMessage("Please enter a valid email address.");
      }
      setStatus("error");
      return;
    }

    setCount(result.count);
    setStatus("success");
    if (result.duplicate) {
      setMessage("You're already on the list. Early access secured.");
    } else {
      setMessage("You're in. Drop hits when we're ready.");
    }
    setEmail("");
  }

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-bone p-6 text-void sm:p-10 lg:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blood/25 blur-[80px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-blood">
                {ctaContent.eyebrow}
              </p>

              <h2 className="mt-4 max-w-4xl heading-section text-bone">
                {ctaContent.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black/65">
                {ctaContent.description}
              </p>
            </div>

            <div className="grid gap-3">
              {isSuccess ? (
                <div
                  role="status"
                  className="grid gap-3 rounded-2xl border border-black/10 bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-blood text-bone">
                      <Check size={18} strokeWidth={3} />
                    </span>
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-void">
                        You're in
                      </p>
                      <p className="text-sm text-black/65">{message}</p>
                    </div>
                  </div>
                  {count > 0 && (
                    <p className="border-t border-black/10 pt-3 text-xs font-bold uppercase tracking-[0.18em] text-black/50">
                      {count} {count === 1 ? "person" : "people"} on the list
                    </p>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-3">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") {
                        setStatus("idle");
                        setMessage("");
                      }
                    }}
                    placeholder={ctaContent.placeholder}
                    disabled={isLoading}
                    aria-invalid={status === "error"}
                    aria-describedby={status === "error" ? "email-error" : undefined}
                    className="w-full rounded-full border border-black/10 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-void outline-none transition placeholder:text-black/35 focus:border-blood disabled:opacity-60 aria-[invalid=true]:border-rose-500"
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-void px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-bone transition hover:bg-blood disabled:cursor-wait disabled:opacity-80 disabled:hover:bg-void"
                  >
                    {isLoading ? "Securing your spot..." : ctaContent.buttonLabel}
                    <ArrowUpRight
                      size={18}
                      className="transition group-enabled:group-hover:-translate-y-0.5 group-enabled:group-hover:translate-x-0.5"
                    />
                  </button>

                  {status === "error" && (
                    <p
                      id="email-error"
                      role="alert"
                      className="flex items-center gap-2 px-2 text-xs font-bold uppercase tracking-[0.12em] text-rose-600"
                    >
                      <AlertCircle size={14} />
                      {message}
                    </p>
                  )}

                  {count > 0 && (
                    <p className="px-2 text-xs font-bold uppercase tracking-[0.18em] text-black/45">
                      {count} {count === 1 ? "person" : "people"} already waiting
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
