function HomeImage({ imgSrc }) {
  return (
    <div className="custom-image" style={{ paddingTop: 70 }}>
      <img src={imgSrc} alt="food" />
    </div>
  );
}

export default HomeImage;
