
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  onClick?: () => void;
}

const EventCard = ({ title, date, time, location, image, onClick }: EventCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="event-card cursor-pointer"
    >
      {image && (
        <div className="relative h-48 mb-4 overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full">
            Event
          </span>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">{title}</h3>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-secondary">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-sm text-secondary">
            <Clock className="w-4 h-4 mr-2" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-sm text-secondary">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
