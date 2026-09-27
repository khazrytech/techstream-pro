"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const supabase = createClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSignup(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setMessage("");

    if (password.length < 6) {
      setMessage(
        "Password lazima iwe na angalau characters 6."
      );
      return;
    }

    if (password !== confirm) {
      setMessage("Passwords hazifanani.");
      return;
    }

    setLoading(true);

    const { data, error } =
      await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: name.trim(),
          },
          emailRedirectTo:
            window.location.origin +
            "/auth/callback",
        },
      });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data.session) {
      window.location.replace("/");
      return;
    }

    setMessage(
      "Account imetengenezwa. Angalia email yako na uthibitishe account kabla ya kuingia."
    );
  }

  return (
    <main className="auth-page">
      <div className="glow blue" />
      <div className="glow red" />

      <section className="auth-card">
        <a href="/login" className="brand">
          TECH<span>STREAM</span>
          <b>PRO</b>
        </a>

        <p className="eyebrow">
          CREATE YOUR ACCOUNT
        </p>

        <h1>Join TechStream Pro</h1>

        <p className="sub">
          Movies, Series, Sports na Live TV sehemu moja.
        </p>

        <form onSubmit={handleSignup}>
          <label>
            Full Name

            <div className="field">
              <UserRound size={18} />

              <input
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Jina lako"
                required
              />
            </div>
          </label>

          <label>
            Email

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
          </label>

          <label>
            Password

            <div className="field">
              <LockKeyhole size={18} />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Minimum 6 characters"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </label>

          <label>
            Confirm Password

            <div className="field">
              <LockKeyhole size={18} />

              <input
                type={
                  showConfirm
                    ? "text"
                    : "password"
                }
                value={confirm}
                onChange={(e) =>
                  setConfirm(e.target.value)
                }
                placeholder="Rudia password"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
              >
                {showConfirm ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </label>

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
              ? "Creating account..."
              : "Create Account"}

            <ArrowRight size={19} />
          </button>
        </form>

        <p className="footer">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>
      </section>

      <style jsx>{`
        .auth-page {
          min-height: 100vh;
          background: #02050b;
          color: #fff;
          display: grid;
          place-items: center;
          padding: 22px;
          position: relative;
          overflow: hidden;
          font-family: Inter, system-ui, sans-serif;
        }

        .glow {
          position: fixed;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(110px);
          opacity: .22;
        }

        .blue {
          background: #008cff;
          left: -160px;
          top: 10%;
        }

        .red {
          background: #ff1744;
          right: -180px;
          bottom: 0;
        }

        .auth-card {
          width: min(480px, 100%);
          padding: 34px;
          border: 1px solid rgba(100,170,255,.28);
          border-radius: 28px;
          background: rgba(5,17,31,.88);
          backdrop-filter: blur(24px);
          box-shadow: 0 30px 100px rgba(0,0,0,.45);
          position: relative;
          z-index: 2;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          color: #fff;
          font-size: 22px;
          font-weight: 900;
        }

        .brand span {
          color: #08a9ff;
        }

        .brand b {
          font-size: 10px;
          background: #ff1744;
          padding: 4px 6px;
          border-radius: 4px;
          font-style: italic;
          margin-left: 4px;
        }

        .eyebrow {
          color: #08a9ff;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 3px;
          margin: 30px 0 8px;
        }

        h1 {
          font-size: 34px;
          margin: 0;
        }

        .sub {
          color: #8ea2ba;
          font-size: 13px;
          margin: 10px 0 25px;
        }

        label {
          display: block;
          color: #a9bad0;
          font-size: 11px;
          margin: 15px 0 6px;
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

        .field:focus-within {
          border-color: #08a9ff;
          box-shadow:
            0 0 0 3px rgba(8,169,255,.08);
        }

        .field input {
          width: 100%;
          height: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #fff;
        }

        .field button {
          border: 0;
          background: none;
          color: #7890aa;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .message {
          margin-top: 14px;
          padding: 11px 13px;
          border-radius: 10px;
          background: rgba(255,55,85,.1);
          border: 1px solid rgba(255,55,85,.25);
          color: #ff9dad;
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
          cursor: wait;
        }

        .footer {
          text-align: center;
          color: #8194aa;
          font-size: 12px;
          margin: 23px 0 0;
        }

        .footer a {
          color: #08a9ff;
          text-decoration: none;
          font-weight: 700;
        }

        @media(max-width:500px) {
          .auth-card {
            padding: 25px 18px;
            border-radius: 22px;
          }

          h1 {
            font-size: 29px;
          }
        }
      `}</style>
    </main>
  );
}
