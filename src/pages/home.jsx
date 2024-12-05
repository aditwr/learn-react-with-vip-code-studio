import Counter from "../components/Learn/Counter";
import TaskApp from "../components/Learn/TaskApp";
import PageLayout from "../layouts/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-start min-h-screen gap-y-4">
        <TaskApp />
        {/* <h1 className="text-slate-900">ElaShop Home...</h1> */}
        <br />
        <Counter />
      </div>
    </PageLayout>
  );
}
