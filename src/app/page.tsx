import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-anime-dark">
      <div className="max-w-md w-full">
        <Card>
          <div className="aspect-video bg-slate-800 rounded-lg mb-4 flex items-center justify-center text-slate-500">
            [ Imagem da Notícia ]
          </div>
          <span className="text-anime-secondary text-xs font-bold uppercase tracking-wider">Notícia</span>
          <h2 className="text-2xl font-bold mt-1 mb-3">Novo episódio de Solo Leveling quebra a internet!</h2>
          <p className="text-slate-400 text-sm mb-6">
            O episódio mais recente trouxe uma animação impecável e subiu o nível da temporada...
          </p>
          
          <div className="flex items-center justify-between border-t border-slate-700 pt-4">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Recompensa</span>
              <span className="text-anime-accent font-bold">+1 AP Coins</span>
            </div>
            <Button size="sm">Ler e Ganhar</Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
