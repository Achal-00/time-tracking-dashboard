export default function User(props) {
  return (
    <div className="user">
      <div className="user-details">
        <div className="profile-holder">
          <img src="image-jeremy.png" alt="profile" />
        </div>
        <div className="details">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="other">
        <p
          onClick={() => {
            props.setDaily(true);
            props.setWeekly(false);
            props.setMonthly(false);
          }}
        >
          Daily
        </p>
        <p
          onClick={() => {
            props.setDaily(false);
            props.setWeekly(true);
            props.setMonthly(false);
          }}
        >
          Weekly
        </p>
        <p
          onClick={() => {
            props.setDaily(false);
            props.setWeekly(false);
            props.setMonthly(true);
          }}
        >
          Monthly
        </p>
      </div>
    </div>
  );
}
