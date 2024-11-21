import ImageFeed from "@/components/ImageFeed";
import { fetchImageData } from "@/actions/imageData";
import ImageFeedMobile from "@/components/ImageFeedMobile";

export default async function Home() {
  return (
    <div className="page">
      <h1>Gallery</h1>
      <ImageFeed  />
      <ImageFeedMobile />
    </div>
  );
}
