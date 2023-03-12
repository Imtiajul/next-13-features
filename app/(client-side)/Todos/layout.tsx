import React, { Children } from "react"
import TodosList from "./TodosList"


export const metadata = {
  title: 'Todo Page',
  description: 'Generated by Next.js',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex">
      <div>
         {/* @ts-ignore */}
        <TodosList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  )
}
