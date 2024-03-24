import Navbar from "./Navbar";
import { CarouselItem, CarouselContent,Carousel } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { RecentActivityTable } from "./Tables/RecentActivityData";
import { DataPurchasedTable } from "./Tables/DataPurchased";

export default function DashboardContent() {
  return (
    <div>
      <Navbar/>
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
                    <RecentActivityTable/>
                </div>
              </Card>
              <Card className="p-4">
                <div className="max-w-4xl mx-auto py-8 px-4">
                  <h1 className="text-3xl font-semibold mb-2">Data Purchased</h1>
                  <p className="text-sm text-gray-600 mb-6">Health data purchased on LyfeLynk.</p>
                    <DataPurchasedTable/>
                </div>
              </Card>
            </div>

          </section>
      </div>
    </div>
  )
}