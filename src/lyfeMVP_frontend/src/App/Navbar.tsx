import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 border-b">
      <div className="flex items-center space-x-4">
        <img
          alt="Logo"
          className="h-6 w-6"
          src="/assets/LyfeLynk.png"/>
        <p className="hidden md:block text-2xl font-semibold text-blue-600">
          LyfeLynk
        </p>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link to="/App/Home" className="text-gray-600 hover:text-gray-800">
          Dashboard
        </Link>
        <Link to="/App/MyHealth" className="text-gray-600 hover:text-gray-800">
          My Health
        </Link>
        <Link to="/App/Marketplace" className="text-gray-600 hover:text-gray-800">
          Marketplace
        </Link>
        <Link to="/App/Profile" className="text-gray-600 hover:text-gray-800">
          Profile
        </Link>
      </div>
      <div className="flex items-center">

        <Avatar className="ml-4">
          <AvatarImage alt="John Lenon" src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <Button className="ml-4">
          Connect
        </Button>
      </div>
    </nav>
  )
}