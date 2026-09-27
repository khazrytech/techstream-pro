import ContentCard, {
  Content,
} from "./ContentCard";

export default function ContentSection({
  title,
  kicker,
  items,
}: {
  title: string;
  kicker?: string;
  items: Content[];
}) {
  return (
    <section className="content-section">

      <div className="section-heading">

        <div>

          {kicker && (
            <span className="section-kicker">
              {kicker}
            </span>
          )}

          <h2>{title}</h2>

        </div>

        <button className="see-all">
          View All →
        </button>

      </div>

      <div className="content-row">

        {items.map((item) => (
          <ContentCard
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </section>
  );
}
