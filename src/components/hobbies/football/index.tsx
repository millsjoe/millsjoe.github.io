import { BallFootball } from "tabler-icons-react";
import { ThemedCard } from "../../themedCard";

export const Football = () => {
    return (
        <ThemedCard
            title="Football"
            description="I'm a big fan of most sports but football is the only one I can both watch and play (poorly might I add). I follow Huddersfield Town 
        but not religiously. Whenever I play, I typically play as a Goalkeeper due to the fact I can't kick a ball properly ¯\_(ツ)_/¯ 
        "
            icon={<BallFootball />}
            alignment="right"
        />
    );
};
