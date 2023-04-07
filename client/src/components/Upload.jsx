function Upload() {
  return (
    <>
      <div class="content">
        <h1>Add music</h1>
        <hr />
        <form action="/upload" method="POST" encType="multipart/form-data">
          <label htmlFor="name">Name of the music&nbsp;</label>
          <br />
          <input
            onfocus="onFoc()"
            onfocusout="onFocOut()"
            type="text"
            name="name"
            placeholder="name of the music"
            required
          />
          <br />
          <label htmlFor="artist">Artist&nbsp;</label>
          <br />
          <input
            onfocus="onFoc()"
            onfocusout="onFocOut()"
            type="text"
            name="artist"
            placeholder="Artist"
            required
          />
          <br />
          <label htmlFor="description">Description&nbsp;*</label>
          <br />
          <input
            onfocus="onFoc()"
            onfocusout="onFocOut()"
            type="text"
            name="description"
            placeholder="Description "
            required
          />
          <br />
          <label htmlFor="name">Lyrics</label>
          <br />
          <input
            onfocus="onFoc()"
            onfocusout="onFocOut()"
            type="text"
            name="lyrics"
            placeholder="lyrics optional"
          />
          <br />
          {/*
<label for="name">
  Cover Photo&nbsp;
</label>
<input onchange="" type="file" name="cover" placeholder="name of the music" accept="image/*" required/>
*/}
          <input
            defaultValue="aDflhh4h"
            type="text"
            style={{ display: "none" }}
            id="metadata"
            name="metadata"
            required
          />
          <label htmlFor="name">Music&nbsp;*</label>
          <input
            type="file"
            onchange="meta()"
            name="music"
            placeholder="name of the music"
            accept="audio/*"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
export default Upload;
