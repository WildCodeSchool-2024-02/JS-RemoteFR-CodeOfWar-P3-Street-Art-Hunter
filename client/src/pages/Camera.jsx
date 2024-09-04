export default function Camera() {
  const today = new Date();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const datePicture = today.toLocaleDateString("fr-FR", options);

  console.info(today);

  return (
    <section>
      <h1>Coucou from Camera</h1>
      <form action="" method="post" className="form_camera">
        <input type="file" className="picture" accept="image/png, image/jpeg" />

        <label htmlFor="picture_date">Date</label>
        <p>{datePicture}</p>
        <label htmlFor="picture_title">Title</label>
        <input type="text" />
        <label htmlFor="picture_description">Description</label>
        <textarea rows="5" cols="33">
          <input type="text" placeholder="Description" />
        </textarea>
      </form>
      <button type="submit">Share</button>
    </section>
  );
}
