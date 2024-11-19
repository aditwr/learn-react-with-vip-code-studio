import Button from "../components/Button/Button";
import PageLayout from "../layouts/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-screen gap-y-4">
        <h1 className="text-slate-900">React with TailwindCSS</h1>
        <Button type="secondary" onClick={() => alert("clicked!")}>
          Example Button
        </Button>
      </div>
    </PageLayout>
  );
}
