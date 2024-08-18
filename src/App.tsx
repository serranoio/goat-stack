import './App.css';
import HelloFromFounder from './components/shared/HelloFromFounder/HelloFromFounder';
import MadeWithLove from './components/shared/MadeWithLove/MadeWithLove';
import { Button } from './components/ui/button';
import MeImage from '/me.webp';
// example of a custom hook
export default function App() {
  return (
    <main className="flex flex-col justify-between mx-auto  px-4 sm:px-6 lg:px-8 pt-12 min-h-screen">
      <div>
        <img src="" alt="" className="w-[75%] bg-primary" />
        <h1 className="text-center text-primary h1">Hello</h1>
        <p></p>
      </div>
      <div className="flex gap-4 justify-center flex-col align-center h-[100%]">
        <a className="contents" href="/game">
          <Button>Play</Button>
        </a>
        <a className="contents" href="/leaderboard">
          <Button>Leaderboard</Button>
        </a>
      </div>
      <footer className="">
        <HelloFromFounder
          imageAlt={'David Serrano'}
          imageURL={MeImage}
          founderDescription={`Hey y'all 👋, I'm David, the founder of this game. I hope you enjoy this game that I made. If you have any questions, don't be afraid to reach me!`}
        />
        <MadeWithLove
          githubHandle="serranoio"
          instagramHandle="davidserrano.io"
        />
      </footer>
    </main>
  );
}

