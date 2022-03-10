import ObjectCreationForm from "./object_components/ObjectCreationForm";
import PointsListTable from "./object_components/PointsListTable";

function Home({ pointsList, setPointsList }) {
    return (
        <section className="flex grow">
            <ObjectCreationForm
                pointsList={pointsList}
                setPointsList={setPointsList}
            />
            <PointsListTable pointsList={pointsList} />
        </section>
    );
}

export default Home;
