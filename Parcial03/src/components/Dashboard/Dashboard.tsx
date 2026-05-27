import "../../styles/Dashboard.scss";
import { AddSongForm } from "../AddSong/AddSong";
import { SearchBar } from "../SearchBar/SearchBar";
import { RankingPanel } from "../RankingPanel/RankingPanel";
import { RecommendationPanel } from "../RecommendationGraph/RecommendationGraph";

export const Dashboard = () => {
    return (
        <main className="dashboard">
            <h1>
                Spotify Educational Dashboard
            </h1>
            <AddSongForm />
            <SearchBar />
            <RankingPanel />
            <RecommendationPanel />
        </main>
    );
};