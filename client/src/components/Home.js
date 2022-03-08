import ObjectCreationForm from "./ObjectCreationForm";
import PointsList from "./PointsList";

function Home({ pointsList, setPointsList }) {
    return (
        <section className="flex grow">
            <ObjectCreationForm setPointsList={setPointsList} />
            <PointsList pointsList={pointsList} />
        </section>
    );
}

export default Home;
