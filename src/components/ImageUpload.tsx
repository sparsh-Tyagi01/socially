"use client"

interface ImageUploadProps {
  onChange: (url: string) => void
  value: string
  endpoint: "postImage"
}

function ImageUpload() {
  return (
    <div>ImageUpload</div>
  )
}

export default ImageUpload