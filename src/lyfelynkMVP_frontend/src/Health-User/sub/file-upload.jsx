import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleX } from "lucide-react";
import { useCanister } from "@connect2ic/react";

const FileUpload = () => {
  const [lyfelynkMVP_backend] = useCanister("lyfelynkMVP_backend");
  const [file, setFile] = useState(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [category, setCategory] = useState("");

  const handleFileInputChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      if (validateFile(selectedFile)) {
        setFile({
          file: selectedFile,
          description: "",
          keywords: "",
          category: "",
        });
      }
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDraggingOver(false);

    const droppedFiles = event.dataTransfer.files;

    if (droppedFiles && droppedFiles.length > 0) {
      const droppedFile = droppedFiles[0];
      if (validateFile(droppedFile)) {
        setFile({
          file: droppedFile,
          description: "",
          keywords: "",
          category: "",
        });
      }
    }
  };

  const validateFile = (file) => {
    const supportedFormats = ["pdf", "csv", "xml", "jpg", "jpeg"];
    const fileType = file.type.split("/")[1];
    const fileSizeMB = file.size / (1024 * 1024);
    if (!supportedFormats.includes(fileType)) {
      alert(
        "Unsupported file format. Please select a file with one of the supported formats: PDF, CSV, XML, JPG, JPEG."
      );
      return false;
    }
    if (fileSizeMB > 1.5) {
      alert("File size is larger than 1.5 MB. Please select a smaller file.");
      return false;
    }
    return true;
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;

    if (
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    ) {
      setIsDraggingOver(false);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const fileData = await file.file.arrayBuffer();
      const fileDataArray = [...new Uint8Array(fileData)];

      const metadata = {
        category: category,
        tags: [keywords],
        format: file.file.type,
      };

      const dataAsset = {
        title: file.file.name,
        description: description,
        data: fileDataArray,
        metadata: metadata,
      };

      const result = await lyfelynkMVP_backend.linkHealthData(dataAsset);

      Object.keys(result).forEach((key) => {
        if (key === "err") {
          alert(result[key]);
        }
        if (key === "ok") {
          console.log(result[key]);
          alert("File uploaded successfully");
        }
      });
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setDescription("");
    setKeywords("");
    setCategory("");
  };

  return (
    <div>
      <p className="text-sm mb-4 text-gray-500">
        Supported file formats include PDFs, CSVs, XML, JPGs, and JPEGs.
      </p>
      <div
        className={`flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg ${
          isDraggingOver ? "bg-gray-100" : ""
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <input
          id="fileInput"
          type="file"
          onChange={handleFileInputChange}
          className="hidden"
        />
        <Button
          className="mb-2"
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          Add File
        </Button>
        <span className="text-sm text-gray-500">or</span>
        <span className="text-sm text-gray-500">drag your file here</span>
      </div>

      {file && (
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Keywords</TableHead>
                <TableHead>Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{file.file.name}</TableCell>
                <TableCell>
                  <div className="">
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="">
                    <input
                      type="text"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="">
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                </TableCell>

                <TableCell>
                  <button
                    onClick={handleRemoveFile}
                    className="mt-4 p-2 bg-muted rounded-lg"
                  >
                    {" "}
                    <CircleX />{" "}
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}

      {file && (
        <Button
          onClick={handleUpload}
          className="mt-2"
        >
          Upload
        </Button>
      )}
    </div>
  );
};

export default FileUpload;