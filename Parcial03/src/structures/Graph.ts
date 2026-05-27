export class Graph {
    private adjacencyList:
        Map<string, Set<string>>;
    constructor() {
        this.adjacencyList =
            new Map();
    }

    addSong(song:string):void {
        const normalized =
            song.toLowerCase();
        if(
            !this.adjacencyList.has(
                normalized
            )
        ){
            this.adjacencyList.set(
                normalized,
                new Set()
            );
        }
    }

    connectSongs(
        songA:string,
        songB:string
    ):void {
        const a = songA.toLowerCase();
        const b = songB.toLowerCase();
        this.addSong(a);
        this.addSong(b);
        this.adjacencyList.get(a)!.add(songB);
        this.adjacencyList.get(b)!.add(songA);
    }

    getRecommendations(
        song:string
    ):string[] {
        return Array.from(
            this.adjacencyList.get(
                song.toLowerCase()
            ) || []
        );
    }
}