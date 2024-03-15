import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, EllipsisIcon } from "lucide-react"
import Navbar from "../Navbar"
import { Link } from "react-router-dom"

export default function ShareContent() {
  return (
    <div>
      <section>
        <Navbar/>
      </section>
      <div className="flex flex-col items-center justify-center p-8">
          <div className="flex items-center justify-between w-full">
            <Link to="/App/MyHealth/">
              <ChevronLeft className="text-gray-600" />
            </Link>
          </div>
        <h1 className="mt-4 text-4xl font-bold">Share your Health Data</h1>
        <p className="mt-2 text-lg text-gray-600">Choose the documents below to share or sell the data.</p>
        <div className="mt-6 flex w-full max-w-4xl justify-between items-center">
          <Input className="flex-grow" placeholder="Filter documents..." />
          <div className="flex px-2 space-x-2">
            <Button variant="outline">Share</Button>
            <Button>Sell</Button>
          </div>
        </div>
        <div className="mt-4 w-full max-w-4xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[5%]" />
                <TableHead>Documents</TableHead>
                <TableHead className="w-[20%]">Date Uploaded</TableHead>
                <TableHead className="w-[5%]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox id="doc1" />
                </TableCell>
                <TableCell className="font-medium">Documents</TableCell>
                <TableCell>Today 5:15 PM</TableCell>
                <TableCell>
                  <EllipsisIcon className="text-gray-600" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox id="doc2" />
                </TableCell>
                <TableCell className="font-medium">Loremipsum</TableCell>
                <TableCell>Today 9:48 AM</TableCell>
                <TableCell>
                  <EllipsisIcon className="text-gray-600" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox id="doc3" />
                </TableCell>
                <TableCell className="font-medium">Loremissspm</TableCell>
                <TableCell>Yesterday</TableCell>
                <TableCell>
                  <EllipsisIcon className="text-gray-600" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox id="doc4" />
                </TableCell>
                <TableCell className="font-medium">Ipsum.lore</TableCell>
                <TableCell>Yesterday</TableCell>
                <TableCell>
                  <EllipsisIcon className="text-gray-600" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox id="doc5" />
                </TableCell>
                <TableCell className="font-medium">Sbceedfsjsj</TableCell>
                <TableCell>Monday</TableCell>
                <TableCell>
                  <EllipsisIcon className="text-gray-600" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox id="doc6" />
                </TableCell>
                <TableCell className="font-medium">SimpsonLorem</TableCell>
                <TableCell>Monday</TableCell>
                <TableCell>
                  <EllipsisIcon className="text-gray-600" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex w-full max-w-4xl items-center justify-between">
          <p className="text-sm text-gray-600">0 of 5 row(s) selected.</p>
          <div className="flex space-x-2">
            <Button variant="ghost">Previous</Button>
            <Button variant="ghost">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}