import placeholder from "../../lib/assets/pp.webp"
export default function ProfileIcon(){
    return (
      <div className="inline-block rounded-full overflow-hidden bg-gray-200 h-10 w-10">
        <img
          src={placeholder}
          alt="Profile icon"
          className="object-cover w-full h-full"
        />
      </div>
    );
  };