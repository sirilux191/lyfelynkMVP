import { CarouselItem, CarouselContent, Carousel } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import RecentActivityTable from "../Tables/RecentActivityData"
import DataPurchasedTable from "../Tables/DataPurchased"

export default function DashboardContent() {
  return (
    <div>
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>

        <div className="py-6">
          <Carousel className="mx-auto">
            <CarouselContent>
              <CarouselItem>
                <img
                  alt="How to Create Health ID"
                  className="object-cover w-full h-full rounded-lg"
                  src="/assets/carousel1.png"
                  style={{
                    aspectRatio: "1600/900",
                    objectFit: "cover",
                  }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="How to Create Health ID"
                  className="object-cover w-full h-full rounded-lg"
                  src="/assets/carousel2.png"
                  style={{
                    aspectRatio: "1600/900",
                    objectFit: "cover",
                  }}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="How to Create Health ID"
                  className="object-cover w-full h-full rounded-lg"
                  src="/assets/carousel3.png"
                  style={{
                    aspectRatio: "1600/900",
                    objectFit: "cover",
                  }}
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        <section className="py-4">
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
            <Card>
              <div className="py-8 px-4">
                <h1 className="text-3xl font-semibold mb-2 text-center">Recent Activities</h1>
                <p className="text-sm text-gray-600 mb-6 text-center">Recently shared or uploaded files on LyfeLynk.</p>
                <RecentActivityTable />
              </div>
            </Card>
            <Card>
              <div className="py-8 px-4">
                <h1 className="text-3xl font-semibold mb-2 text-center">Data Purchased</h1>
                <p className="text-sm text-gray-600 mb-6 text-center">Health data purchased on LyfeLynk.</p>
                <DataPurchasedTable/>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}