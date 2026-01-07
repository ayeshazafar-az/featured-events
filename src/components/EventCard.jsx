function EventCard({ event }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{event.name}</h5>
          <p className="card-text"><strong>Date:</strong> {event.date}</p>
          <p className="card-text"><strong>Time:</strong> {event.time}</p>
          <p className="card-text"><strong>Location:</strong> {event.location}</p>
          <p className="card-text">{event.description}</p>
          <button className="btn btn-primary mt-auto">Register</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
