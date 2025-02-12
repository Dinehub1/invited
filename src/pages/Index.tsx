
import { useState } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";
import { PlusCircle } from "lucide-react";

const mockEvents = [
  {
    id: 1,
    title: "Summer Garden Party",
    date: "2024-07-15",
    time: "14:00",
    location: "Secret Garden, Central Park",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    date: "2024-08-20",
    time: "09:00",
    location: "Innovation Center",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
  }
];

const Index = () => {
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  return (
    <div className="min-h-screen p-6 md:p-12 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-sm font-medium px-3 py-1 bg-muted rounded-full">
              Your Events
            </span>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">
              {showCreateEvent ? "Create New Event" : "Upcoming Events"}
            </h1>
          </div>
          
          <button
            onClick={() => setShowCreateEvent(!showCreateEvent)}
            className="btn-primary flex items-center space-x-2"
          >
            {showCreateEvent ? (
              <>
                <span>View Events</span>
              </>
            ) : (
              <>
                <PlusCircle className="w-5 h-5" />
                <span>Create Event</span>
              </>
            )}
          </button>
        </div>

        {showCreateEvent ? (
          <div className="animate-fade-up">
            <EventForm onSubmit={console.log} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
            {mockEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                image={event.image}
                onClick={() => console.log("Clicked event:", event.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
