"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "./section-heading";
import { contactLinks, profile } from "@/lib/portfolio-data";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    setSending(true);
    // Open the visitor's mail client with a pre-filled message
    try {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(
        `${message}\n\n— ${name}\n${email}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setSent(true);
      form.reset();
      toast.success("Opening your email app…", {
        description: "If nothing happens, email me directly at " + profile.email,
      });
    } catch {
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to online internships, collaboration, and a quick chat about AI & data science."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for internships
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Reach out directly
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Prefer email or LinkedIn? Pick whatever works for you — I
                usually reply within a day.
              </p>

              <div className="mt-6 space-y-3">
                {contactLinks.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/40 p-3.5 transition hover:border-emerald-400/40 hover:bg-emerald-500/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-300 ring-1 ring-emerald-500/30 transition group-hover:scale-110">
                      <c.icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] uppercase tracking-wide text-slate-400">
                        {c.label}
                      </div>
                      <div className="truncate text-sm font-medium text-white">
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
          >
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/40">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Ready to send!
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Your email app should have opened with your message. If not,
                  write to me at{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-emerald-300 underline-offset-2 hover:underline"
                  >
                    {profile.email}
                  </a>
                  .
                </p>
                <Button
                  variant="outline"
                  className="mt-5 border-white/15 bg-white/5 text-slate-100 hover:bg-white/10"
                  onClick={() => setSent(false)}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium text-slate-300"
                  >
                    Your name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="e.g. Priya Sharma"
                    required
                    className="border-white/10 bg-slate-950/60 text-white placeholder:text-slate-500 focus-visible:border-emerald-500/60 focus-visible:ring-emerald-500/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-slate-300"
                  >
                    Your email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="border-white/10 bg-slate-950/60 text-white placeholder:text-slate-500 focus-visible:border-emerald-500/60 focus-visible:ring-emerald-500/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about the role or project…"
                    required
                    className="resize-none border-white/10 bg-slate-950/60 text-white placeholder:text-slate-500 focus-visible:border-emerald-500/60 focus-visible:ring-emerald-500/30"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500"
                >
                  {sending ? (
                    <>Preparing…</>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>
                <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-500">
                  <Sparkles className="h-3 w-3 text-emerald-400" />
                  Or ask AKIL Bot anything using the chat button →
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
