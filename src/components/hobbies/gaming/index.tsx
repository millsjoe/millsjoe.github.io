import { DeviceGamepad } from "tabler-icons-react";
import { ThemedCard } from "../../themedCard";

export const Gaming = () => {
    return (
        <ThemedCard
            title="Gaming"
            description="Gaming is one of my favourite passtimes. Whether it be single player or multi player I can't get enough of it.
            My latest obsession is battle royale games - more specifically Apex Legends (I have the funko pops to prove it)
        "
            icon={<DeviceGamepad />}
            alignment="left"
        />
    );
};
