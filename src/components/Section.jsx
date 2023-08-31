export default function Section(props) {
  return (
    <div className="misc">
      <div
        className="misc-image-holder"
        style={{ background: `${props.color}` }}
      >
        <img src={props.image} alt="misc" />
      </div>
      <div className="content">
        <div className="heading">
          <p>{props.title}</p>
          <svg
            width="21"
            height="5"
            viewBox="0 0 21 5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div className="wrapper">
          <h1>{props.current}hrs</h1>
          <p>
            Last {props.timeFrame} - {props.prev}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
