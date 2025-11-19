import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";

const NoteCard = ({ note }) => {
  return (
    <Link
      to={`/note/${note.id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h2 className="card-title text-base-content">
          {note.title || "Untitled Note"}
        </h2>
        <p className="text-base-content/line-clamp-3">
          {note.content || "No content available."}
        </p>
        <div className="card-actions justify-between items-center mt-4 ">
          <span className="text-sm text-base-content/60">
            {new Date(note.createdAt).toLocaleDateString()}
          </span>
        <div className="flex items-center gap-1">
             <PenSquareIcon className="size-4" />
             <button className= "btn btn-ghost btn-xs text-error">
                <Trash2Icon className="size-4"/>
             </button>
        </div>
        </div>
      </div>
    </Link>
  );
};
export default NoteCard;
