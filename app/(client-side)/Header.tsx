import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-blue-500 p-6">
      <Link href="/" className="py-2 px-4 bg-white rounded-lg">Home</Link>
    </header>
  )
}

export default Header