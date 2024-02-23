import { VscDashboard } from "react-icons/vsc";
const Dashboard = () => {
    return (
        <section className="m-16 flex flex-col flex-shrink justify-center items-center gap-8">
            <span className="font-bold text-4xl">Welcome to the Admin Dashboard!!</span>
            <VscDashboard className="text-9xl" />
            <p className="text-2xl">Navigate using the side bar to explore admin features</p>
        </section>
    );
}

export default Dashboard;