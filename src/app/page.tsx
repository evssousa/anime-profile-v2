import { MainLayout } from "@/components/layout/MainLayout"

export default function HomePage() {
    return (
        <MainLayout>
            <div className="p-8">
                <h1 className="text-4xl font-bold">
                    Anime Profile
                </h1>

                <p className="mt-4 text-zinc-400">
                    Plataforma otaku gamificada.
                </p>
            </div>
        </MainLayout>
    )
}