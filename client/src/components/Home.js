import ObjectCreationForm from "./ObjectCreationForm";
import PointsList from "./PointsList";

function Home() {
    return (
        <section className="flex grow">
            <ObjectCreationForm />
            <PointsList />
        </section>
    );
}

export default Home;
