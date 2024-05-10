// import { useEffect, useState } from "react";

// export default function Lists() {
//   const [isEdit, setisEdit] = useState(false)
//   const [todolist, settodolist] = useState([]);
//   const [todoTitle, setTodoTitle] = useState("");
//   const data = {
//     id: String(Date.now()),
//     title: todoTitle,
//     completed: false,
//   };
//   const handleAdd = async(data) => {
//    const response=await fetch("http://localhost:3001/todos", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     const newData= await response.json();
//     settodolist (prevState =>[...prevState,newData]);
//     setTodoTitle("")
//   };
//   const handleDelete = async (todoId) => { 
//     const response = await fetch(`http://localhost:3001/todos/${todoId}`, {
//       method: "DELETE",
    
//     });
//     settodolist((prevState) => {
//     return prevState.filter((todo) => {
//       return todo.id !== todoId;
//     });
//   });
//    }
    
   
//    const handleEdit = async(todo) => {
//     const response=await fetch(`http://localhost:3001/todos/${todo.id}`, {
//        method: "PATCH",
//        body: JSON.stringify(data),
//        headers: {
//          "Content-type": "application/json; charset=UTF-8",
//        },
//      });
      
//     }
//   async function fetchtodolist() {
//     const response = await fetch("http://localhost:3001/todos");
//     const fetchedtodolist = await response.json();
//     settodolist(fetchedtodolist);
//   }

//   useEffect(() => {
//     fetchtodolist();
//   }, []);

//   console.log(todolist);
//   return (
//     <>
//       <div className="flex justify-center mt-10">
//         <div className="font-cambria text-xl text-center tracking-widest bg-cyan-100 w-80 ">
//           TO DO LISTS
//           <div className="flex justify-center mt-10">
//             <p className="w-40 px-3 mr-20 ml-20 pb-2">
              
//               <input
//                 type="text" value={todoTitle}
                
//                 className="text-sm font-bold appearance-none block  bg-cyan-200  border border-bg-cyan-400 rounded  px-4 mb-3"
//                 id=""
//                 required
//                 onChange={(e) => setTodoTitle(e.target.value)}
//               />
//             </p>
//             <p class="flex justify-end mr-24 mb-15 pb-10">
//               <input
//                 type="submit"
//                 className="bg-cyan-200 font-bold hover:bg-cyan-400 text-center text-sm  rounded py-2 px-4"
//                 value="ADD"
//                 onClick={() => handleAdd(data)}
//               />
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <ul className="text-sm ">
//               {todolist.map((item) => (
//                 <li className=" border-amber-900 rounded-t-lg">
//                   <div className="flex items-center ps-3">
//                     <input
//                       type="checkbox"
//                       value=""
//                       className="w-4 h-4 bg-cyan-200 border-amber-900 rounded focus:ring-amber-800"
//                     />
//                     <label className="py-5 ms-2 text-sm font-medium "></label>
//                     {!isEdit && <div className="w-36" onDoubleClick={()=>{setisEdit(true)}}>{item.title}</div>}
//                     {isEdit &&<form><input onClick={() => handleEdit(item.id)}/></form> }
                    
                    
//                     <i class="fa-solid fa-trash ml-3" onClick={() => handleDelete(item.id)}> </i>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

