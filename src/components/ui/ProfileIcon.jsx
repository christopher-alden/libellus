import placeholder from "../../lib/assets/ahyeon.jpeg";
export default function ProfileIcon() {
  return (
    <div className="inline-block rounded-full overflow-hidden h-12 w-12">
      <img
        src={placeholder}
        alt="Profile icon"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
