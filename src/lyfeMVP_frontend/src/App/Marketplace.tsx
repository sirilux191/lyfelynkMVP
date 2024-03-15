import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "./Navbar";
import { EllipsisIcon } from "lucide-react";

export default function MarketplaceContent() {
  return (
    <div>
      <section>
        <Navbar/>
      </section>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Marketplace</h1>
        <p className="mt-2 text-base text-gray-600">Explore and Acquire Critical Health Insights responsibly.</p>
          <Tabs defaultValue="Purchase" className="mt-4">
            <TabsList>
              <TabsTrigger value="Purchase" className="md:w-80">Purchase</TabsTrigger>
              <TabsTrigger value="Past Orders" className="md:w-40">Past Orders</TabsTrigger>
            </TabsList>

            <TabsContent value="Purchase">
              <div className="flex justify-between space-x-4 py-4">
                <Input placeholder="Filter documents..." />
                <Button>Purchase</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[5%]" />
                    <TableHead>Documents</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead className="w-[5%]" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Checkbox id="doc1" />
                    </TableCell>
                    <TableCell>Loremipsum</TableCell>
                    <TableCell>who.health.org</TableCell>
                    <TableCell>$316.00</TableCell>
                    <TableCell>
                      <EllipsisIcon className="text-gray-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox id="doc2" />
                    </TableCell>                    
                    <TableCell>Loremipsum</TableCell>
                    <TableCell>who.health.org</TableCell>
                    <TableCell>$316.00</TableCell>
                    <TableCell>
                      <EllipsisIcon className="text-gray-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox id="doc3" />
                    </TableCell>
                    <TableCell>Loremipsum</TableCell>
                    <TableCell>who.health.org</TableCell>
                    <TableCell>$316.00</TableCell>
                    <TableCell>
                      <EllipsisIcon className="text-gray-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox id="doc4" />
                    </TableCell>
                    <TableCell>Loremipsum</TableCell>
                    <TableCell>who.health.org</TableCell>
                    <TableCell>$316.00</TableCell>
                    <TableCell>
                      <EllipsisIcon className="text-gray-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox id="doc5" />
                    </TableCell>
                    <TableCell>Loremipsum</TableCell>
                    <TableCell>who.health.org</TableCell>
                    <TableCell>$316.00</TableCell>
                    <TableCell>
                      <EllipsisIcon className="text-gray-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox id="doc6" />
                    </TableCell>
                    <TableCell>Loremipsum</TableCell>
                    <TableCell>who.health.org</TableCell>
                    <TableCell>$316.00</TableCell>
                    <TableCell>
                      <EllipsisIcon className="text-gray-500" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox id="doc7" />
                    </TableCell>
                    <TableCell>Loremipsum</TableCell>
                    <TableCell>who.health.org</TableCell>
                    <TableCell>$316.00</TableCell>
                    <TableCell>
                      <EllipsisIcon className="text-gray-500" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="flex justify-between items-center mt-4">
                <span  className="text-sm text-gray-600">0 of 5 row(s) selected.</span>
                <div className="flex space-x-2">
                  <Button variant="ghost">Previous</Button>
                  <Button variant="ghost">Next</Button>
                </div>
              </div>

            </TabsContent>

            <TabsContent value="Past Orders">
              <div className="flex justify-between py-4 space-x-4">
                  <Input className="" placeholder="Filter documents..." type="text" />
                  <Button className="bg-blue-500 text-white">Download</Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[5px]" />
                      <TableHead>Documents</TableHead>
                      <TableHead className="w-[20%]">Date Purchased</TableHead>
                      <TableHead className="w-[5%]" />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Checkbox id="doc1" />
                      </TableCell>
                      <TableCell className="font-medium">Loremipsum</TableCell>
                      <TableCell>Today 5:15 PM</TableCell>
                      <TableCell>
                        <EllipsisIcon className="text-gray-500" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Checkbox id="doc2" />
                      </TableCell>
                      <TableCell className="font-medium">Loremissspm</TableCell>
                      <TableCell>Today 9:48 AM</TableCell>
                      <TableCell>
                        <EllipsisIcon className="text-gray-500" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Checkbox id="doc3" />
                      </TableCell>
                      <TableCell className="font-medium">IpsumLore</TableCell>
                      <TableCell>Yesterday</TableCell>
                      <TableCell>
                        <EllipsisIcon className="text-gray-500" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Checkbox id="doc4" />
                      </TableCell>
                      <TableCell className="font-medium">Sbocedfsjsjs</TableCell>
                      <TableCell>Yesterday</TableCell>
                      <TableCell>
                        <EllipsisIcon className="text-gray-500" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Checkbox id="doc5" />
                      </TableCell>
                      <TableCell className="font-medium">SimpsonLorem</TableCell>
                      <TableCell>Monday</TableCell>
                      <TableCell>
                        <EllipsisIcon className="text-gray-500" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Checkbox id="doc6" />
                      </TableCell>
                      <TableCell className="font-medium">SimpsonLorem</TableCell>
                      <TableCell>Monday</TableCell>
                      <TableCell>
                        <EllipsisIcon className="text-gray-500" />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-600">0 of 5 row(s) selected.</span>
                  <div className="flex space-x-2">
                    <Button variant="ghost">Previous</Button>
                    <Button variant="ghost">Next</Button>
                  </div>
                </div>
            </TabsContent>
          </Tabs>
      </div>
    </div>
  )
}