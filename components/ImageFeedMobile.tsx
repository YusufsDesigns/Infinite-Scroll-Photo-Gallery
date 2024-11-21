"use client"

import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { fetchImageData } from "@/actions/imageData";

const ImageFeedMobile = () => {
    // const [data, setData] = useState<any[]>([]);
    const [columns, setColumns] = useState<[any[], any[]]>([[], []]);
    const [page, setPage] = useState(2);
    const lastPostRef = useRef<HTMLElement>(null)
    const { ref, entry } = useIntersection({
        root: lastPostRef.current,
        threshold: 1,
    });

    useEffect(() => {
        const divideIntoColumns = (images: any[]) => {
            const column1 = images.filter((_, index) => index % 3 === 0);
            const column2 = images.filter((_, index) => index % 3 === 1);
            setColumns((prevColumns) => [
                [...prevColumns[0], ...column1],
                [...prevColumns[1], ...column2],
            ]);
        };

        if (entry?.isIntersecting) {
                fetchImageData(page).then((images) => {
                    divideIntoColumns(images);
                    setPage((prevPage) => prevPage + 1);
            });
        }
    }, [entry, page]);

    return (
        <div className="mobile_view">
            <div className="image_feed">
                {columns.map((column, colIndex) => (
                <div key={colIndex} className="">
                    {column.map((image: any) => (
                        <div className="image">
                            <Image
                                key={image.id}
                                src={image?.urls?.regular}
                                alt="Unsplash Image"
                                width={200}
                                height={400}
                            />
                            <p className="caption">{image.user.username}</p>
                        </div>
                    ))}
                </div>
                ))}
            </div>
            <div ref={ref} className="spin_container">
                <div className="spinner"></div>
            </div>
        </div>
    )
}

export default ImageFeedMobile