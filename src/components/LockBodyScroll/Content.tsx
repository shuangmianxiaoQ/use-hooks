const Content = () => {
  const terms = [
    "stars",
    "birds",
    "puppy",
    "nature",
    "snow",
    "cafe",
    "hipster",
    "startup",
    "salad",
    "funny"
  ];

  const images = terms.map((term) => (
    <img
      key={term}
      src={`https://source.unsplash.com/random/800x200?${term}`}
      alt=""
    />
  ));

  return <div className="images">{images}</div>;
};

export default Content;
