

import TimelineComponent from "../../components/TimelineComponent/index.jsx";
import HeaderTimeline from "../../components/HeaderTimeline/index.jsx";
import TrendingComponent from "../../components/TrendingComponent/index.jsx";
import ModalDelete from "../../components/ModalDelete/index.jsx";

export default function Home() {

    return (
        <>
            <HeaderTimeline />
            <TimelineComponent />
            <ModalDelete />
        </>

    )

}