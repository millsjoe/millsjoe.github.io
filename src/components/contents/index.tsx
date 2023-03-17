import { useEffect, useRef, useState } from "react";
import { OssOrGloss } from "./ossOrGloss";
import styles from "./styles.module.css";

export const Content = () => {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open) {
            setHeight(ref.current?.getBoundingClientRect().height!);
        } else {
            setHeight(0);
        }
    }, [open]);
    return (
        <div className={styles.main}>
            <div className={styles.info}>
                <h5>
                    {"This is still very much a work in progress..."}
                    <br />
                    {"In the meantime have a play on my hit game 'OSS OR GLOSS"}
                </h5>
                <div className={styles.prompt} onClick={() => setOpen((prev) => !prev)}>
                    {"What's 'OSS OR GLOSS?... ▼"}
                </div>
                <div className={styles.collapsable} style={{ height }}>
                    <div ref={ref}>
                        <div className={styles.content}>
                            {
                                "'OSS (or horse for you non-northeners) OR GLOSS is a little game where you're presented with a name of either a horse or a paint colour. Use the buttons below to chose your selection and see how you do"
                            }
                        </div>
                    </div>
                </div>
            </div>
            <OssOrGloss />
        </div>
    );
};
