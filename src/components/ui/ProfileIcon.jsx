import placeholder from "../../lib/assets/pp.webp";
export default function ProfileIcon() {
  return (
    <div className="inline-block rounded-full overflow-hidden bg-gray-200 h-12 w-12">
      <img
        src={placeholder}
        alt="Profile icon"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
