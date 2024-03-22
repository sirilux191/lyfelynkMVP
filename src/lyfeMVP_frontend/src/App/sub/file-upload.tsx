import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FileUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(false); // Reset dragging over state
  
    const droppedFiles = event.dataTransfer.files;
  
    // Ensure that files are dropped successfully before updating state
    if (droppedFiles && droppedFiles.length > 0) {
      const filesArray = Array.from(droppedFiles);
      setFiles(prevFiles => [...prevFiles, ...filesArray]);
    }
  };
  
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(true); // Set dragging over state
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(true); // Set dragging over state
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    
    // Ensure that dragging over state is reset only if the leave event is triggered from the drop zone
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;
    
    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
      setIsDraggingOver(false); // Reset dragging over state
    }
  };

  const handleUpload = () => {
    // Here you can implement your upload logic using the files array
    console.log("Upload button clicked. Files:", files);
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div>
      <p className="text-sm mb-4 text-gray-500">Supported file formats include PDFs, CSVs, XML, JPGs and JPEGs.</p>
      <div
        className={`flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg ${isDraggingOver ? 'bg-gray-100' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <input
          id="fileInput"
          type="file"
          onChange={handleFileInputChange}
          multiple
          className="hidden"
        />
        <Button className="mb-2" onClick={() => document.getElementById('fileInput')?.click()}>Add Files</Button>
        <span className="text-sm text-gray-500">or</span>
        <span className="text-sm text-gray-500">drag your files here</span>
      </div>

      {files.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Type</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {files.map((file, index) => (
              <TableRow key={index}>
                <TableCell>{file.name}</TableCell>
                <TableCell>{(file.size / 1024).toFixed(2)} KB</TableCell>
                <TableCell>{file.type}</TableCell>
                <TableCell>
                  <Button variant="secondary" onClick={() => handleRemoveFile(index)}>&times;</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Button onClick={handleUpload} className="mt-4">Upload</Button>
    </div>
  );
};

export default FileUpload;
