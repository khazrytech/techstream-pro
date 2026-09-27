"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
  Film,
  Tv,
  Trophy,
  Radio,
  ArrowRight,
  ShieldCheck,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  return (
    <main className="login-page">
      {/* Cinematic background */}
      <div className="background">
        <div className="background-image" />
        <div className="background-overlay" />
        <div className="blue-glow" />
        <div className="red-glow" />
      </div>

      {/* Top navigation */}
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">
            <span className="play-shape">▶</span>
          </div>

          <div className="brand-text">
            <div>
              TECH<span>STREAM</span>
              <b>PRO</b>
            </div>
            <small>MOVIES • SPORTS • SERIES • LIVE TV</small>
          </div>
        </div>

        <div className="signup-top">
          Don't have an account?
          <a href="/signup">Sign Up <ArrowRight size={15} /></a>
        </div>
      </header>

      <section className="content">
        {/* LEFT SIDE */}
        <div className="hero-section">
          <div className="hero-content">
            <div className="eyebrow">
              <span />
              PREMIUM ENTERTAINMENT
            </div>

            <h1>
              Your World of
              <strong>Entertainment</strong>
              Starts Here
            </h1>

            <p className="hero-description">
              Stream the latest movies, trending series, live sports
              and your favorite channels — all in one place.
            </p>

            <div className="categories">
              <Category
                icon={<Film size={22} />}
                title="Movies"
                text="Latest & Classic"
                type="movie"
              />

              <Category
                icon={<Tv size={22} />}
                title="Series"
                text="Binge Worthy"
                type="series"
              />

              <Category
                icon={<Trophy size={22} />}
                title="Sports"
                text="Live & On Demand"
                type="sports"
              />

              <Category
                icon={<Radio size={22} />}
                title="Live TV"
                text="Global Channels"
                type="live"
              />
            </div>

            <div className="bottom-features">
              <span>High Quality</span>
              <i />
              <span>Fast Streaming</span>
              <i />
              <span>All Devices</span>

              <div className="devices">
                <Monitor size={17} />
                <Tablet size={16} />
                <Smartphone size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT LOGIN */}
        <div className="login-area">
          <div className="login-card">

            <div className="mobile-brand">
              <div className="brand-icon">
                <span className="play-shape">▶</span>
              </div>

              <div className="mobile-brand-name">
                TECH<span>STREAM</span>
                <b>PRO</b>
              </div>
            </div>

            <div className="login-heading">
              <div className="login-logo">
                <span>▶</span>
              </div>

              <h2>
                TECH<span>STREAM</span>
                <b>PRO</b>
              </h2>

              <small>LOGIN TO YOUR ACCOUNT</small>

              <p>Welcome back! Please sign in to continue</p>

              <div className="heading-line">
                <span />
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Login submitted");
              }}
            >
              {/* Email */}
              <div className="input-group">
                <UserRound size={20} />

                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  autoComplete="username"
                  required
                />
              </div>

              {/* Password */}
              <div className="input-group">
                <LockKeyhole size={20} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>

              {/* Remember / Forgot */}
              <div className="login-options">
                <label className="remember">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) =>
                      setRemember(e.target.checked)
                    }
                  />

                  <span className="checkmark">
                    {remember && "✓"}
                  </span>

                  <span>Remember me</span>
                </label>

                <a href="/forgot-password">
                  Forgot password?
                </a>
              </div>

              {/* Login */}
              <button className="login-button" type="submit">
                <span>Login</span>
                <ArrowRight size={21} />
              </button>
            </form>

            {/* Divider */}
            <div className="divider">
              <span />
              <p>or continue with</p>
              <span />
            </div>

            {/* Social login */}
            <div className="social-login">
              <button type="button">
                <span className="google">G</span>
                Google
              </button>

              <button type="button">
                <span className="facebook">f</span>
                Facebook
              </button>

              <button type="button">
                <span className="apple">●</span>
                Apple
              </button>
            </div>

            <div className="signup-mobile">
              Don't have an account?
              <a href="/signup"> Sign Up</a>
            </div>

            <div className="security">
              <ShieldCheck size={17} />
              <span>Your data is safe with us</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .login-page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: #02050b;
          color: white;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .background {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }

        .background-image {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              90deg,
              rgba(2, 7, 16, 0.15),
              rgba(2, 7, 16, 0.55)
            ),
            url("https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2200&q=90");
          background-size: cover;
          background-position: center;
          transform: scale(1.04);
          filter: saturate(1.1);
        }

        .background-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(1, 5, 13, 0.92) 0%,
              rgba(1, 5, 13, 0.72) 38%,
              rgba(1, 5, 13, 0.82) 100%
            ),
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.85)
            );
        }

        .blue-glow {
          position: absolute;
          width: 550px;
          height: 550px;
          left: 15%;
          top: 30%;
          border-radius: 50%;
          background: rgba(0, 132, 255, 0.13);
          filter: blur(100px);
        }

        .red-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          right: -120px;
          top: 20%;
          border-radius: 50%;
          background: rgba(255, 20, 55, 0.14);
          filter: blur(110px);
        }

        .topbar {
          position: relative;
          z-index: 3;
          width: 100%;
          height: 105px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4.5%;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .brand-icon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          background:
            linear-gradient(
              145deg,
              #00aaff,
              #0878ff 55%,
              #ff173d
            );
          box-shadow:
            0 0 28px rgba(0, 151, 255, 0.3),
            0 0 30px rgba(255, 24, 57, 0.12);
          transform: skewY(-2deg);
        }

        .play-shape {
          color: white;
          font-size: 25px;
          transform: translateX(2px);
        }

        .brand-text > div {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1.3px;
        }

        .brand-text span,
        .login-heading span,
        .mobile-brand-name span {
          color: #08a9ff;
        }

        .brand-text b,
        .login-heading b,
        .mobile-brand-name b {
          margin-left: 7px;
          padding: 3px 8px;
          color: white;
          font-size: 14px;
          font-style: italic;
          background: linear-gradient(
            135deg,
            #ff163d,
            #ff3758
          );
          border-radius: 5px;
          letter-spacing: 0;
        }

        .brand-text small {
          display: block;
          margin-top: 3px;
          color: #91a4bc;
          font-size: 8px;
          letter-spacing: 3px;
        }

        .signup-top {
          color: #aab9cb;
          font-size: 14px;
        }

        .signup-top a {
          margin-left: 9px;
          color: #08a9ff;
          text-decoration: none;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 3px;
        }

        .content {
          position: relative;
          z-index: 2;
          min-height: calc(100vh - 105px);
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 40px;
          padding: 20px 4.5% 55px;
        }

        .hero-section {
          display: flex;
          align-items: center;
        }

        .hero-content {
          max-width: 690px;
          padding: 20px 0;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #6fbfff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 18px;
        }

        .eyebrow span {
          width: 32px;
          height: 2px;
          background: #0ba8ff;
          box-shadow: 0 0 10px #0ba8ff;
        }

        h1 {
          margin: 0;
          font-size: clamp(48px, 5vw, 78px);
          line-height: 0.98;
          letter-spacing: -4px;
          font-weight: 800;
        }

        h1 strong {
          display: block;
          color: #08a9ff;
          text-shadow: 0 0 35px rgba(0, 164, 255, 0.18);
        }

        .hero-description {
          max-width: 550px;
          margin: 25px 0 35px;
          color: #c4d0df;
          font-size: 16px;
          line-height: 1.65;
        }

        .categories {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }

        .category {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .category-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: white;
          border: 1px solid rgba(255,255,255,.1);
        }

        .category-icon.movie {
          background: rgba(255, 25, 57, 0.25);
          box-shadow: 0 0 25px rgba(255, 25, 57, 0.12);
        }

        .category-icon.series {
          background: rgba(118, 48, 255, 0.25);
        }

        .category-icon.sports {
          background: rgba(35, 170, 80, 0.25);
        }

        .category-icon.live {
          background: rgba(0, 137, 255, 0.25);
        }

        .category strong {
          display: block;
          font-size: 13px;
        }

        .category small {
          color: #7f91a8;
          font-size: 10px;
        }

        .bottom-features {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-top: 50px;
          color: #8494a8;
          font-size: 11px;
        }

        .bottom-features i {
          width: 3px;
          height: 3px;
          background: #526274;
          border-radius: 50%;
        }

        .devices {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: 15px;
          color: #647991;
        }

        .login-area {
          display: flex;
          justify-content: flex-end;
        }

        .login-card {
          width: min(520px, 100%);
          padding: 38px 42px;
          border-radius: 30px;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(
              145deg,
              rgba(10, 27, 49, 0.82),
              rgba(2, 9, 21, 0.82)
            );
          border: 1px solid rgba(87, 170, 255, 0.35);
          box-shadow:
            0 0 70px rgba(0, 118, 255, 0.12),
            inset 0 0 50px rgba(0, 125, 255, 0.035);
          backdrop-filter: blur(25px);
        }

        .login-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          border-top: 1px solid rgba(0, 174, 255, 0.7);
          border-right: 1px solid rgba(255, 30, 70, 0.6);
        }

        .login-card::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          right: -130px;
          bottom: -140px;
          border-radius: 50%;
          background: rgba(255, 20, 70, 0.18);
          filter: blur(70px);
        }

        .login-heading {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .login-logo {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin: 0 auto 11px;
          border-radius: 12px;
          background: linear-gradient(
            145deg,
            #00a9ff,
            #147aff 55%,
            #ff173e
          );
          box-shadow: 0 0 28px rgba(0, 151, 255, 0.22);
        }

        .login-logo span {
          color: white;
          font-size: 19px;
        }

        .login-heading h2 {
          margin: 0;
          font-size: 27px;
          letter-spacing: -1px;
        }

        .login-heading small {
          display: block;
          margin-top: 4px;
          color: #8298b2;
          font-size: 8px;
          letter-spacing: 3px;
          font-weight: 700;
        }

        .login-heading p {
          color: #c0cede;
          font-size: 13px;
          margin: 20px 0 12px;
        }

        .heading-line {
          width: 70px;
          height: 4px;
          margin: 0 auto 27px;
          border-radius: 20px;
          background: linear-gradient(
            90deg,
            #00aaff,
            #c02bff
          );
          box-shadow: 0 0 15px rgba(0, 157, 255, 0.4);
        }

        form {
          position: relative;
          z-index: 1;
        }

        .input-group {
          height: 58px;
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 14px;
          padding: 0 17px;
          border-radius: 15px;
          background: rgba(8, 24, 43, 0.8);
          border: 1px solid rgba(126, 161, 198, 0.23);
          color: #8fa5be;
          transition: 0.25s ease;
        }

        .input-group:focus-within {
          border-color: rgba(0, 166, 255, 0.8);
          box-shadow:
            0 0 0 3px rgba(0, 158, 255, 0.08),
            0 0 25px rgba(0, 145, 255, 0.08);
        }

        .input-group input {
          width: 100%;
          height: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: white;
          font-size: 14px;
        }

        .input-group input::placeholder {
          color: #71869e;
        }

        .password-toggle {
          border: 0;
          background: transparent;
          color: #758ba4;
          cursor: pointer;
          display: grid;
          place-items: center;
          padding: 4px;
        }

        .login-options {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 17px 2px 22px;
          font-size: 12px;
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #a5b5c8;
          cursor: pointer;
        }

        .remember input {
          display: none;
        }

        .checkmark {
          width: 19px;
          height: 19px;
          display: grid;
          place-items: center;
          border-radius: 5px;
          border: 1px solid #4f6882;
          background: rgba(255,255,255,.03);
          color: white;
          font-size: 12px;
        }

        .remember input:checked + .checkmark {
          background: #08a9ff;
          border-color: #08a9ff;
          box-shadow: 0 0 13px rgba(0, 165, 255, 0.3);
        }

        .login-options a {
          color: #00aaff;
          text-decoration: none;
        }

        .login-button {
          width: 100%;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 0;
          border-radius: 15px;
          color: white;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          background: linear-gradient(
            100deg,
            #009ff5,
            #176fff 48%,
            #c51cff
          );
          box-shadow:
            0 10px 35px rgba(0, 119, 255, 0.2),
            0 0 25px rgba(174, 25, 255, 0.12);
          transition: 0.25s ease;
        }

        .login-button:hover {
          transform: translateY(-2px);
          box-shadow:
            0 15px 40px rgba(0, 119, 255, 0.3),
            0 0 30px rgba(174, 25, 255, 0.18);
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 27px 0 19px;
        }

        .divider span {
          height: 1px;
          flex: 1;
          background: rgba(142, 163, 190, 0.18);
        }

        .divider p {
          margin: 0;
          color: #77899e;
          font-size: 11px;
          white-space: nowrap;
        }

        .social-login {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .social-login button {
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid rgba(125, 157, 191, 0.2);
          border-radius: 13px;
          background: rgba(8, 24, 42, 0.7);
          color: #dce7f2;
          cursor: pointer;
          font-size: 12px;
          transition: 0.2s ease;
        }

        .social-login button:hover {
          background: rgba(21, 45, 70, 0.8);
          border-color: rgba(0, 158, 255, 0.35);
        }

        .google,
        .facebook,
        .apple {
          font-weight: 900;
          font-size: 17px;
        }

        .google {
          color: #fff;
        }

        .facebook {
          color: #2d8cff;
        }

        .apple {
          color: white;
          font-size: 12px;
        }

        .signup-mobile {
          text-align: center;
          margin-top: 24px;
          color: #8c9caf;
          font-size: 12px;
        }

        .signup-mobile a {
          color: #00aaff;
          text-decoration: none;
          font-weight: 700;
        }

        .security {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-top: 23px;
          color: #71869c;
          font-size: 10px;
        }

        .security svg {
          color: #39a8ff;
        }

        .mobile-brand {
          display: none;
        }

        @media (max-width: 1100px) {
          .content {
            grid-template-columns: 1fr;
            padding-top: 30px;
          }

          .hero-section {
            display: none;
          }

          .login-area {
            justify-content: center;
          }

          .topbar {
            height: 90px;
          }
        }

        @media (max-width: 600px) {
          .topbar {
            height: 78px;
            padding: 0 20px;
          }

          .brand {
            display: none;
          }

          .signup-top {
            width: 100%;
            text-align: center;
            font-size: 12px;
          }

          .content {
            min-height: calc(100vh - 78px);
            padding: 10px 14px 30px;
          }

          .login-card {
            padding: 27px 19px;
            border-radius: 24px;
          }

          .mobile-brand {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            margin-bottom: 25px;
          }

          .mobile-brand .brand-icon {
            width: 39px;
            height: 39px;
            border-radius: 11px;
          }

          .mobile-brand .play-shape {
            font-size: 18px;
          }

          .mobile-brand-name {
            font-size: 20px;
            font-weight: 900;
            letter-spacing: -1px;
          }

          .mobile-brand-name b {
            font-size: 10px;
            padding: 3px 6px;
          }

          .login-heading .login-logo {
            display: none;
          }

          .login-heading h2 {
            display: none;
          }

          .login-heading small {
            font-size: 8px;
          }

          .login-heading p {
            margin-top: 14px;
          }

          .input-group {
            height: 55px;
          }

          .social-login {
            grid-template-columns: 1fr;
          }

          .social-login button {
            height: 48px;
          }

          h1 {
            font-size: 45px;
          }
        }

        @media (max-width: 380px) {
          .login-card {
            padding: 24px 15px;
          }

          .login-options {
            font-size: 11px;
          }
        }
      `}</style>
    </main>
  );
}

function Category({
  icon,
  title,
  text,
  type,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  type: "movie" | "series" | "sports" | "live";
}) {
  return (
    <div className="category">
      <div className={`category-icon ${type}`}>
        {icon}
      </div>

      <div>
        <strong>{title}</strong>
        <small>{text}</small>
      </div>
    </div>
  );
}
