import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen justify-center align-top bg-slate-500 p-6 py-2 px-3 ">
      <div className="flex flex-row justify-center relative py-2 px-3">
        <button
          onClick={() => navigate(-2)}
          className="absolute left-0 top-0 bottom-0 text-slate-100 "
        >
          <ChevronLeftIcon />
        </button>

        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Tasks Manager
        </h1>
      </div>
      <div className=" flex flex-col bg-slate-400 p-6 justify-center py-2 px-3 rounded-md">
        <h1 className="text-1xl text-slate-100 font-bold text-center">
          {title}
        </h1>
        <p className="text-1xl text-slate-100 font-medium text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TaskPage;
