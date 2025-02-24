
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Book } from "lucide-react";

interface BookLink {
  id: number;
  title: string;
  url: string;
}

const books: BookLink[] = [
  {
    id: 1,
    title: "Como criar uma mente",
    url: "https://drive.google.com/file/d/1eE8sCHp5W_M2tUgpkP4_LMAYJCbDq5ng/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Como convencer alguém em 90 segundos",
    url: "https://drive.google.com/file/d/1ar0PA-1vyxAsFg8lV9saB8F2cm0Z1GX8/view?usp=drive_link"
  },
  {
    id: 3,
    title: "Rápido e Devagar - Duas formas de pensar",
    url: "https://drive.google.com/file/d/1HXaWVWHJNIRgLv0uxL5BmDo0CfWV6IYz/view?usp=drive_link"
  }
];

const BooksDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="card-gradient p-6 rounded-xl hover:scale-105 transition-transform duration-300 border border-white/10 cursor-pointer">
          <div className="flex items-center gap-4 mb-4">
            <Book className="w-8 h-8 text-[#7E69AB]" />
            <h3 className="text-xl font-semibold text-white">Livros Gratuitos</h3>
          </div>
          <p className="text-gray-300 text-sm md:text-base">Descubra conteúdos interessantes com leitura</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-black/90 border border-white/10">
        <div className="space-y-4 p-4">
          <h2 className="text-2xl font-bold text-white mb-6">Livros Disponíveis</h2>
          <div className="space-y-4">
            {books.map((book) => (
              <a
                key={book.id}
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white"
              >
                {book.title}
              </a>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BooksDialog;
