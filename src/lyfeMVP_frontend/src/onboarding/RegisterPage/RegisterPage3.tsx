import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

import { ChevronLeft } from 'lucide-react';
import { Link } from "react-router-dom";

export default function RegisterPage3Content() {
  return (
    <section className="px-6 flex justify-center items-center h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
      <div className="flex flex-col lg:flex-row md:w-1/2">
        <div className="flex-1 flex flex-col justify-center text-foreground p-4">
          <div className="flex items-center mb-4">
            <img
              alt="Logo"
              className="h-6 w-6 md:h-10 md:w-10"
              src="assets/LyfeLynk.png"/>
            <h1 className="text-2xl md:text-4xl font-bold ml-2">Lyfelynk</h1>
          </div>
          <p className="text-xl md:text-2xl">Digitally Linking your health.</p>
        </div>

        <div className="flex-1 items-center max-w-md bg-background rounded-lg p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Register Service</h2>
              <Link to="/">
                  <ChevronLeft/>
              </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4">
            <Input placeholder="Username" />
            <Input placeholder="Pincode" />
            <Input placeholder="Name" />
            <Select>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="mm/dd/yyyy" type="date" />
            <Select>
              <SelectTrigger id="blood-type">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="a+">A+</SelectItem>
                <SelectItem value="a-">A-</SelectItem>
                <SelectItem value="b+">B+</SelectItem>
                <SelectItem value="b-">B-</SelectItem>
                <SelectItem value="o+">O+</SelectItem>
                <SelectItem value="o-">O-</SelectItem>
                <SelectItem value="ab+">AB+</SelectItem>
                <SelectItem value="ab-">AB-</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Country" />
            <Input placeholder="Height in cm" />
            <Input placeholder="State" />
            <Input placeholder="Weight in Kg" />
          </div>
          <Link to='/Health-Service/Register'>
            <Button className="w-full">Submit</Button>
          </Link>
        </div>
 
      </div>
    </section>
  )
}
