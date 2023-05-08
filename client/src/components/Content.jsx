function Content({ axios, change, collection, url }) {
  console.log(collection);
  const Popular = () => {
    const collect = collection.map((e) => {
      return (
        <div className="footer display" onClick={(evt) => change(e._id)}>
          <img
            src={`${url}render/image/${e.coverLocation}`}
            style={{ "border-radius": "1.2vw" }}
            className="img-cover"
          />
          <ul data-src={`${e._id}`} onClick={(evt) => change(e)}>
            <li className="song">{e.title}</li>
            <li className="title-cover">{e.artist}</li>
          </ul>
        </div>
      );
    });
    return collect;
  };

  return (
    <>
      <div class="content box-content">
        <span>MOST POPULAR</span>
        <hr />
        {collection.length > 0 && <Popular />}
      </div>
    </>
  );
}
export default Content;
