export class Track {
    name?: string;
    type?: string;
    stream_url?: string;
    duration?: number;
    album?: Album;
}

class Album {
    image?: string;
}