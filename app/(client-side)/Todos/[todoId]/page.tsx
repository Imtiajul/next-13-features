import { Todo } from "@/typings"
import { notFound } from "next/navigation"
import React from "react"

export const dynammicParams = true;

type PageProps = {
  params: {
    todoId: string
  }
}

const fetchTodoById = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  )

  { /* @ts-ignore next */}
  const todo: Todo = res.json()

  return todo
}

// const TodoPage = ({params: {todoId}}: PageProps ) => {
const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodoById(todoId)

  if (!todo.id) return notFound();

  return (
    <div className="m-2 bg-yellow-300 p-10 shadow-lg border-2 max-w-lg mx-auto">
      <p>
        # {todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">{todo.userId}</p>
    </div>
  )
}

export default TodoPage

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
  const todos: Todo[] = await res.json()

  // DEMO purpose only build 10 pages
  const trimmedTodos = todos.splice(0, 10)

  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }))
}
