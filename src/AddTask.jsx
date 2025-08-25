import React from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  return (
    <div className="space-y-4 rounded-md bg-slate-200 shadow p-6 flex flex-col">
      <input
        type="text"
        placeholder="Digite o titulo da tarefa aqui"
        className=" border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite o titulo da tarefa aqui"
        className=" border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        onClick={() => {
          if (
            title.trim() === "" || //corrigir essa parte
            description.trim() === ""
          ) {
            return alert("preencha os campos");
          } else {
            onAddTaskSubmit(title, description);
            setTitle(""), setDescription("");
          }
        }}
        className="rounded-md border bg-slate-500 text-white font-medium px-4 py-2"
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
