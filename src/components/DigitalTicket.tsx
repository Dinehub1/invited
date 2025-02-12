
import { QRCodeSVG } from "qrcode.react";
import { Calendar, MapPin, User } from "lucide-react";

interface DigitalTicketProps {
  eventId: number;
  title: string;
  date: string;
  location: string;
  guestName?: string;
}

const DigitalTicket = ({ eventId, title, date, location, guestName = "Guest" }: DigitalTicketProps) => {
  // Create a unique ticket ID that includes the event ID and some randomness
  const ticketId = `${eventId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="glass-card p-6 rounded-3xl space-y-6">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-xl font-medium text-white">{title}</h3>
          <div className="flex items-center text-white/60 space-x-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-white/60 space-x-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center text-white/60 space-x-2">
            <User className="w-4 h-4" />
            <span className="text-sm">{guestName}</span>
          </div>
        </div>
        
        <div className="bg-white p-2 rounded-xl">
          <QRCodeSVG
            value={ticketId}
            size={100}
            level="H"
            includeMargin={false}
          />
        </div>
      </div>
      
      <div className="pt-4 border-t border-white/10">
        <div className="text-center space-y-1">
          <p className="text-white/60 text-sm">Booking ID</p>
          <p className="font-mono text-white/80">{ticketId}</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalTicket;
