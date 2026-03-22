"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, FileText, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // We will use standard emailjs integration
    // The user needs to create an account at emailjs.com,
    // Add an email service, create an email template, and fill in these IDs
    emailjs.sendForm(
      'service_lfhg5jb', // Replace with your Service ID
      'template_t51qomk', // Replace with your Template ID
      e.currentTarget,
      '2jvm1-1SV7wb7jGOt' // Replace with your Public Key
    )
      .then((result) => {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 3000);
      }, (error) => {
        console.log(error.text);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      });
  };

  return (
    <section id="contact" className="py-20 relative bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get In <span className="text-foreground dark:text-white">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-foreground dark:bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let&apos;s Connect</h3>
              <p className="text-foreground/70 leading-relaxed max-w-md">
                I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+919682021319"
                className="flex items-center gap-4 text-foreground/80 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">+91-9682021319</span>
              </a>

              <a
                href="mailto:awadh8185kishor@gmail.com"
                className="flex items-center gap-4 text-foreground/80 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">awadh8185kishor@gmail.com</span>
              </a>

              <a
                href="https://github.com/Awadh8185"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">github.com/Awadh8185</span>
              </a>

              <a
                href="https://www.linkedin.com/in/awadh8185"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">linkedin.com/in/awadh8185</span>
              </a>
            </div>

            <div className="pt-6">
              <a
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground dark:border-white/20 text-foreground dark:text-white px-8 py-4 text-sm font-bold tracking-wide transition-all hover:bg-red-600 hover:text-white dark:hover:bg-red-500 hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                View & Download Resume
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={sendEmail} className="space-y-6 bg-background rounded-2xl p-8 border border-foreground/10 shadow-lg relative overflow-hidden">
              {/* Optional background glow inside the form */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 opacity-80">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-foreground/5 focus:bg-background focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder="Awadh Kishor"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-80">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-foreground/5 focus:bg-background focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder="awadh8185kishor@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 opacity-80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-foreground/5 focus:bg-background focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Hi Awadh, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 rounded-lg border-2 border-red-600 dark:border-red-500 text-red-600 dark:text-red-500 bg-transparent px-8 py-4 font-semibold transition-all hover:bg-red-600 hover:text-white dark:hover:bg-red-500 dark:hover:text-black focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                ) : status === "success" ? (
                  <span>Message Sent!</span>
                ) : status === "error" ? (
                  <span>Failed to Send</span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
