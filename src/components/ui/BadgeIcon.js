export function BadgeIcon(props) {
  return (
    <button className="stroke-2 bg-white/60 p-2 rounded-md border border-white">
      {props.children}
    </button>
  );
}
