"use client";

type Props = {
  open: boolean;
  title?: string;
  image?: string;
  onClose: () => void;
};

export default function PlayerModal({
  open,
  title = "TechStream Player",
  image,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="player-modal">

      <div
        className="player-backdrop"
        onClick={onClose}
      />

      <div className="player-window">

        <button
          className="player-close"
          onClick={onClose}
        >
          ×
        </button>

        <div
          className="player-screen"
          style={{
            backgroundImage: image
              ? `url("${image}")`
              : undefined,
          }}
        >

          <div className="player-center">

            <div className="big-play">
              ▶
            </div>

            <h2>{title}</h2>

            <p>
              Player iko tayari kwa MP4 / HLS / M3U8.
            </p>

            <button className="primary-button">
              ▶ Start Watching
            </button>

          </div>

        </div>

        <div className="player-controls">
          <span>▶</span>

          <div className="player-progress">
            <span />
          </div>

          <span>🔊</span>
          <span>⚙</span>
          <span>⛶</span>
        </div>

      </div>

    </div>
  );
}
