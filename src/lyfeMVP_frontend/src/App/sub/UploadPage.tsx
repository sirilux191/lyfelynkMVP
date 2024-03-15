import { Link } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react";
import Navbar from "@/App/Navbar";

export default function UploadContent() {
  return (
    <div>
      <section>
        <Navbar/>
      </section>
      <div className=" md:py-20 p-6 md:flex md:items-center md:justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
          <div className="mb-4">
            <Link to="/App/MyHealth">
              <ChevronLeft className="inline-block w-6 h-6 mr-2" />
              Back
            </Link>

          </div>
          <h1 className="text-2xl font-bold mb-2">Upload Your Health Data</h1>
          <p className="mb-4 text-gray-600">Choose a format to upload your data.</p>
          <div className="mb-4">
            <Tabs defaultValue="Document" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="Document">Document</TabsTrigger>
                <TabsTrigger value="Form">Form</TabsTrigger>
              </TabsList>
              <TabsContent value="Document">
                <p className="text-sm mb-4 text-gray-500">Supported file formats include PDFs, CSVs, XML, JPGs and JPEGs.</p>
                <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg mb-4">
                  <Button className="mb-2">Add Files</Button>
                  <span className="text-sm text-gray-500">or</span>
                  <span className="text-sm text-gray-500">drag your files here</span>
                </div>
                <Button>Upload</Button>
              </TabsContent>

              <TabsContent value="Form">
                <h2 className="text-sm mb-4 text-gray-500">
                  Fill the form out carefully and make sure the information is true to your knowledge.
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="mb-1 font-medium" htmlFor="input1">
                      Label
                    </label>
                    <input className="border rounded px-3 py-2" id="input1" placeholder="Placeholder" type="text" />
                    <p className="mt-1 text-sm text-gray-600">Description</p>
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 font-medium" htmlFor="input2">
                      Label
                    </label>
                    <input className="border rounded px-3 py-2" id="input2" placeholder="Placeholder" type="text" />
                    <p className="mt-1 text-sm text-gray-600">Description</p>
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 font-medium" htmlFor="input3">
                      Label
                    </label>
                    <input className="border rounded px-3 py-2" id="input3" placeholder="Placeholder" type="text" />
                    <p className="mt-1 text-sm text-gray-600">Description</p>
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 font-medium" htmlFor="input4">
                      Label
                    </label>
                    <input className="border rounded px-3 py-2" id="input4" placeholder="Placeholder" type="text" />
                    <p className="mt-1 text-sm text-gray-600">Description</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button>Upload</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

        </div>
      </div>
    </div>
  );
}