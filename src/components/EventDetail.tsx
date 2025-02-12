
import { Calendar, MapPin, X, Ticket } from "lucide-react";
import SharedFeatures from "./SharedFeatures";
import DigitalTicket from "./DigitalTicket";
import { useState } from "react";

interface EventDetailProps {
  id: number;
  title: string;
  date: string;
  location: string;
  image?: string;
  onClose: () => void;
}

const EventDetail = ({ id, title, date, location, image, onClose }: EventDetailProps) => {
  const [showTicket, setShowTicket] = useState(false);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#FF8C7A] to-[#FFB77A]">
      <div className="h-full overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <button onClick={onClose} className="p-2 hover:bg-black/10 rounded-full">
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowTicket(!showTicket)}
                className="preview-button flex items-center space-x-2"
              >
                <Ticket className="w-5 h-5" />
                <span>{showTicket ? "Hide Ticket" : "Show Ticket"}</span>
              </button>
              <button className="preview-button">
                Preview
              </button>
            </div>
          </div>

          {showTicket && (
            <div className="mb-6 animate-fade-up">
              <DigitalTicket
                eventId={id}
                title={title}
                date={date}
                location={location}
              />
            </div>
          )}

          {image && (
            <div className="relative h-80 mb-6">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-3xl"
              />
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 preview-button">
                Edit Background
              </button>
            </div>
          )}

          <div className="glass-card p-6 rounded-3xl space-y-4 mb-6">
            <h1 className="text-3xl font-semibold text-white">{title}</h1>
            
            <div className="flex items-center text-white/80 space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{date}</span>
            </div>
            
            <div className="flex items-center text-white/80 space-x-2">
              <MapPin className="w-5 h-5" />
              <span>{location}</span>
            </div>
          </div>

          <SharedFeatures />
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
