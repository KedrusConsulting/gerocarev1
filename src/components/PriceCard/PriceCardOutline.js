const PriceCardOutline = ({
  title,
  description,
  nairaAmt = 0,
  label,
  occurence = "",
  note,
  onDemand = false,
}) => {
  const styles = [
    "price__card",
    "price__card--outline",
    onDemand ? "price__card--demand" : "",
  ].join(" ");

  return (
    <div className={styles} data-aos="fade-up" data-aos-duration="2000">
      <h4 className="heading--4">{title}</h4>
      <div className="price__price">
        <span className="price__amt">₦{nairaAmt}</span>
        <span className="price__duration">{occurence}</span>
      </div>

      <p className="price__description">{description}</p>
      {note && <p className="price__note">{note}</p>}

      <a href="/register" className="btn btn--main">
        {label}
      </a>
    </div>
  );
};

export default PriceCardOutline;
