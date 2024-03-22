import { useState } from 'react';
import { Table, TableBody, TableCell, TableHeader,TableHead, TableRow } from "@/components/ui/table";
import { Upload } from 'lucide-react';
import { Share2 } from 'lucide-react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";


export default function MyHealthContent() {
  // Sample health data
  const healthData: HealthData[] = [
    {
      id: "INV001",
      status: "Uploaded",
      dateUploaded: "Today 5:15 PM",
    },
    {
      id: "INV002",
      status: "Shared",
      dateUploaded: "Today 5:48 AM",
    },
    {
      id: "INV003",
      status: "Uploaded",
      dateUploaded: "Yesterday",
    },
    {
      id: "INV004",
      status: "Shared",
      dateUploaded: "Yesterday",
    },
    {
      id: "INV005",
      status: "Shared",
      dateUploaded: "Monday",
    },
  ];

  const [filterValue, setFilterValue] = useState("");

  return (
    <div className="bg-background">
      <Navbar />
      <main className="px-8 py-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-2">Upload and Share Your Health Data</h1>
          <p className="text-lg text-gray-600 mb-8">
            Easily upload and securely share your health data with professionals or facilities using LyfeLynk.
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            <Link to="/App/MyHealth/Upload">
              <div className="p-6 border rounded-lg cursor-pointer">
                <Upload className="text-blue-500 h-16 w-24 mb-4" />
                <span className="block text-lg font-semibold">Upload</span>
              </div>
            </Link>

            <Link to="/App/MyHealth/Share">
              <div className="p-6 border rounded-lg cursor-pointer">
                <Share2 className="text-blue-500 h-16 w-24 mb-4" />
                <span className="block text-lg font-semibold">Share</span>
              </div>
            </Link>
          </div>

        </section>
        <section className="container mt-8">
          <h2 className="text-2xl md:text-4xl font-semibold">Recent Activities</h2>
          <p className="pb-6 text-gray-600">Recently shared or uploaded files on LyfeLynk.</p>
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter Documents..."
              value={filterValue}
              onChange={(event) => setFilterValue(event.target.value)}
              className="max-w-xl"
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-3/4">Health Data</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Uploaded</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {healthData
                .filter(row =>
                  row.id.toLowerCase().includes(filterValue.toLowerCase()) ||
                  row.status.toLowerCase().includes(filterValue.toLowerCase()) ||
                  row.dateUploaded.toLowerCase().includes(filterValue.toLowerCase())
                )
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.dateUploaded}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </section>
      </main>
    </div>
  );
}

interface HealthData {
  id: string;
  status: string;
  dateUploaded: string;
}
