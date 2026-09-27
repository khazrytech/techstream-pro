export default function Sidebar() {
  return (
    <aside className="sidebar hidden md:block">
      <div className="brand">
        <div className="brand-mark">T</div>
        <div>
          <strong>
            TECH<span>STREAM</span>
          </strong>
          <small>PRO STREAMING</small>
        </div>
      </div>

      <div className="sidebar-label">MENU</div>

      <nav className="sidebar-nav">
        <button className="active">
          <span className="sidebar-icon">🏠</span>
          <span>Nyumbani</span>
        </button>

        <button>
          <span className="sidebar-icon">🎬</span>
          <span>Filamu</span>
          <span className="nav-count">120</span>
        </button>

        <button>
          <span className="sidebar-icon">📺</span>
          <span>Series</span>
        </button>

        <button>
          <span className="sidebar-icon">⚽</span>
          <span>Michezo</span>
          <span className="nav-count">LIVE</span>
        </button>

        <button>
          <span className="sidebar-icon">♡</span>
          <span>Zangu</span>
        </button>

        <button>
          <span className="sidebar-icon">⚙</span>
          <span>Mipangilio</span>
        </button>
      </nav>

      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <div className="upgrade-icon">✦</div>
          <strong>TechStream Premium</strong>
          <p>Furahia streaming bila kikomo na 4K Quality.</p>
          <button>Explore Premium</button>
        </div>

        <div className="sidebar-profile">
          <div className="avatar">T</div>
          <div>
            <strong>Techboy</strong>
            <small>Free Account</small>
          </div>
        </div>
      </div>
    </aside>
  );
}
