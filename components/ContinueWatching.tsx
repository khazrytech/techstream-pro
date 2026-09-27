const items = [
  {
    title: "Dark Horizon",
    episode: "S01 • E04",
    progress: 72,
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "The Last Kingdom",
    episode: "S02 • E07",
    progress: 43,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Into Space",
    episode: "1h 02m left",
    progress: 28,
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85",
  },
];

export default function ContinueWatching() {
  return (
    <section className="content-section">

      <div className="section-heading">

        <div>
          <span className="section-kicker">
            YOUR ACTIVITY
          </span>

          <h2>Endelea Kuangalia</h2>
        </div>

        <button className="see-all">
          View All →
        </button>

      </div>

      <div className="continue-grid">

        {items.map((item) => (
          <article
            className="continue-card"
            key={item.title}
          >

            <div className="continue-image">

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <button className="mini-play">
                ▶
              </button>

              <div className="progress">
                <span
                  style={{
                    width: `${item.progress}%`,
                  }}
                />
              </div>

            </div>

            <div className="continue-info">
              <h3>{item.title}</h3>
              <p>{item.episode}</p>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}
