"use server";

export async function fetchImageData(page: number){
    try {
        const data = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.CLIENT_ID}&page=${page}&per_page=30`)

        const imageData = await data.json();

        console.log(imageData);

        return imageData;
    } catch (error: any) {
        console.log("Error fetching image data");
    }
    
} 