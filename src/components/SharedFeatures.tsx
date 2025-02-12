
import { Image, Music } from "lucide-react";

const SharedFeatures = () => {
  return (
    <div className="space-y-6">
      <div className="feature-section">
        <Image className="feature-icon" />
        <h2 className="feature-title">Shared Album</h2>
        <p className="feature-description">
          With Shared Albums, guests can view and add their photos to the event.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="image-placeholder">
              <Image className="w-8 h-8 text-white/40" />
            </div>
          ))}
        </div>
      </div>

      <div className="feature-section">
        <Music className="feature-icon" />
        <h2 className="feature-title">Shared Playlist</h2>
        <p className="feature-description">
          Share a playlist with all your guests.
        </p>
        <div className="image-placeholder mt-6 aspect-[4/2]">
          <Music className="w-8 h-8 text-white/40" />
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <h3 className="text-center text-xl">Ready to start inviting people?</h3>
        <p className="text-center text-white/60">A subscription is required.</p>
        <button className="btn-primary w-full">
          Upgrade to iCloud+
        </button>
      </div>
    </div>
  );
};

export default SharedFeatures;
