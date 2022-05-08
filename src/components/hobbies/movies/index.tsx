import { Movie } from "tabler-icons-react";
import { ThemedCard } from "../../themedCard";

export const Movies = () => {
    return (
        <ThemedCard
            title="Movies"
            description="Going to the Cinema to watch the latest blockbuster is something I could do nonstop. I'm
            particularly obssessed with films in the Marvel franchise but generally will watch anything. If I went as much as 
            I'd like, my bank account would be drained by those dire movie snack prices though.
        "
            icon={<Movie />}
            alignment="left"
        />
    );
};
