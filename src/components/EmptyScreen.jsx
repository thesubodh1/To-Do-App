import emptyImage from "../assets/empty.jpg";

export default function EmptyScreen() {
  return (
    <section className="section-empty">
      <img src={emptyImage} alt="looking into empty files" className="empty-img"/>
      <p className="empty-text">Empty...</p>
    </section>
  );
}
