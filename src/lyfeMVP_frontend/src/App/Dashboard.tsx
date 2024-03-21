import Navbar from "./Navbar";
import { CarouselItem, CarouselContent,Carousel } from "@/components/ui/carousel"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Card } from "@/components/ui/card"

export default function DashboardContent() {
  return (
    <div>
      <Navbar/>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>

        <div className="py-6 w-full">
          <Carousel className="w-full  mx-auto">
            <CarouselContent>

              <CarouselItem>
                <img
                  alt="How to Create Health ID"
                  className="object-cover w-full h-full rounded-lg"
                  height={900}
                  src="/assets/carousel1.png"
                  style={{
                    aspectRatio: "1600/900",
                    objectFit: "cover",
                  }}
                  width={1600}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="How to Create Health ID"
                  className="object-cover w-full h-full rounded-lg"
                  height={900}
                  src="/assets/carousel1.png"
                  style={{
                    aspectRatio: "1600/900",
                    objectFit: "cover",
                  }}
                  width={1600}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="How to Create Health ID"
                  className="object-cover w-full h-full rounded-lg"
                  height={900}
                  src="/assets/carousel1.png"
                  style={{
                    aspectRatio: "1600/900",
                    objectFit: "cover",
                  }}
                  width={1600}
                />
              </CarouselItem>
            </CarouselContent>

          </Carousel>
        </div>

          <section className="py-4">
            <div key="1" className="grid gap-6 md:grid-cols-2">
              <Card className="p-4">
                <div className="max-w-4xl mx-auto py-8 px-4">
                  <h1 className="text-3xl font-semibold mb-2">Recent Activities</h1>
                  <p className="text-sm text-gray-600 mb-6">Recently shared or uploaded files on LyfeLynk.</p>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Health Data</TableHead>
                        <TableHead className="w-[100px]">Status</TableHead>
                        <TableHead className="w-[200px]">Date Uploaded</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Uploaded</TableCell>
                        <TableCell>Today 5:15 PM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV002</TableCell>
                        <TableCell>Shared</TableCell>
                        <TableCell>Today 5:48 AM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV003</TableCell>
                        <TableCell>Uploaded</TableCell>
                        <TableCell>Yesterday</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV004</TableCell>
                        <TableCell>Shared</TableCell>
                        <TableCell>Yesterday</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV005</TableCell>
                        <TableCell>Shared</TableCell>
                        <TableCell>Monday</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Card>
              <Card className="p-4">
                <div className="max-w-4xl mx-auto py-8 px-4">
                  <h1 className="text-3xl font-semibold mb-2">Data Purchased</h1>
                  <p className="text-sm text-gray-600 mb-6">Health data purchased on LyfeLynk.</p>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Health Data</TableHead>
                        <TableHead className="w-[100px]">Owner</TableHead>
                        <TableHead className="w-[200px]">Date Purchased</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">INV006</TableCell>
                        <TableCell>loremipsum</TableCell>
                        <TableCell>Today 3:30 PM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV007</TableCell>
                        <TableCell>lorem</TableCell>
                        <TableCell>Today 4:45 AM</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV008</TableCell>
                        <TableCell>loremquinn</TableCell>
                        <TableCell>Yesterday</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV009</TableCell>
                        <TableCell>loremipsum</TableCell>
                        <TableCell>Yesterday</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV010</TableCell>
                        <TableCell>loripsum</TableCell>
                        <TableCell>Monday</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>

          </section>
      </div>
    </div>
  )
}