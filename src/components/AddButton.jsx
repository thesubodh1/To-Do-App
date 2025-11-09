export default function AddButton({onAdd}) {
  return (
    <div className="add-btn">
      <button className="add" onClick={onAdd}>
        <ion-icon name="add-outline" className="add-icon"></ion-icon>
      </button>
    </div>
  );
}
