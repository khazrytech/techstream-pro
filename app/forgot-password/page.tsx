"use client";

import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleReset(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } =
      await supabase.auth.resetPasswordForEmail(
        email.trim(),
        {
          redirectTo:
            window.location.origin + "/login",
        }
      );

    setLoading(false);

    setMessage(
      error
        ? error.message
        : "Tumekutumia maelekezo ya kubadilisha password kwenye email yako."
    );
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <a href="/login" className="back">
          <ArrowLeft size={16} />
          Back to Login
        </a>

        <div className="logo">
          TECH<span>STREAM</span>
          <b>PRO</b>
        </div>

        <p className="eyebrow">
          ACCOUNT RECOVERY
        </p>

        <h1>Forgot Password?</h1>

        <p className="sub">
          Weka email yako tutakutumia link ya
          kubadilisha password.
        </p>

        <form onSubmit={handleReset}>
          <label>Email Address</label>

          <div className="field">
            <Mail size={18} />

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="you@example.com"
              required
            />
          </div>

          {message && (
            <div className="message">
              {message}
            </div>
          )}

          <button
            className="submit"
            disabled={loading}
          >
            {loading
              ? "Sending..."
              : "Send Reset Link"}

            <ArrowRight size={18} />
          </button>
        </form>
      </section>

      <style jsx>{`
        .auth-page {
          min-height: 100vh;
          background: #02050b;
          color: #fff;
          display: grid;
          place-items: center;
          padding: 22px;
          font-family: Inter,system-ui,sans-serif;
        }

        .auth-card {
          width: min(450px,100%);
          padding: 34px;
          border: 1px solid rgba(100,170,255,.28);
          border-radius: 28px;
          background: rgba(5,17,31,.9);
          box-shadow: 0 30px 100px rgba(0,0,0,.45);
        }

        .back {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #8ea2ba;
          text-decoration: none;
          font-size: 12px;
        }

        .logo {
          margin-top: 35px;
          font-size: 23px;
          font-weight: 900;
        }

        .logo span {
          color: #08a9ff;
        }

        .logo b {
          font-size: 10px;
          background: #ff1744;
          padding: 4px 6px;
          border-radius: 4px;
          font-style: italic;
          margin-left: 5px;
        }

        .eyebrow {
          color: #08a9ff;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 3px;
          margin: 28px 0 8px;
        }

        h1 {
          font-size: 32px;
          margin: 0;
        }

        .sub {
          color: #8ea2ba;
          font-size: 13px;
          line-height: 1.6;
        }

        label {
          display: block;
          color: #a9bad0;
          font-size: 11px;
          margin: 24px 0 7px;
        }

        .field {
          height: 54px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 15px;
          background: #08182b;
          border: 1px solid rgba(120,160,200,.2);
          border-radius: 13px;
          color: #7890aa;
        }

        .field input {
          width: 100%;
          height: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #fff;
        }

        .message {
          margin-top: 14px;
          padding: 11px 13px;
          border-radius: 10px;
          background: rgba(8,169,255,.08);
          border: 1px solid rgba(8,169,255,.2);
          color: #9edcff;
          font-size: 12px;
          line-height: 1.5;
        }

        .submit {
          width: 100%;
          height: 55px;
          margin-top: 18px;
          border: 0;
          border-radius: 13px;
          background:
            linear-gradient(
              100deg,
              #009ff5,
              #176fff 50%,
              #c51cff
            );
          color: #fff;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
        }

        .submit:disabled {
          opacity: .6;
        }
      `}</style>
    </main>
  );
}
