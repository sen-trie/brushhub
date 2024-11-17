export interface Artwork {
    id: number;
    artist: number;
    imgSrc: string;
    tags: string[];
    title?: string;
    description?: string;
    datePosted?: string;
}