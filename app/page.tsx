
import GetData from "@/components/GetData";
import GitFlexCard from "@/components/GitFlexCard";
import GithubLogin from "@/components/GitHubLogin"
import OpenSourceStats from "@/components/OpenSourceButton";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0f0f0f] via-[#1a0033] to-[#000000] opacity-90" />
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-600/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500/20 blur-[140px] rounded-full" />

      {/* Hero Section */}
      <div className="relative z-10 text-center mt-20 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,0,255,0.2)]">
          GitFlex
        </h1>
        <p className="mt-4 text-gray-400 max-w-lg mx-auto">
          Flex your GitHub. Generate your personalized developer card with
          stats, badges, and an AI personality summary.
        </p>
      </div>

      {/* Search or Login */}
      <div className="relative z-10 mt-10 w-full max-w-md">
        <div className="my-6 flex items-center justify-center gap-2">
          <div className="h-px bg-gray-700 grow"></div>
          <span className="text-gray-500 text-sm">or</span>
          <div className="h-px bg-gray-700 grow"></div>
          <GetData/>
        </div>
        <GithubLogin/>

        <div>
          <OpenSourceStats></OpenSourceStats>
        </div>
      </div>

      {/* Card Preview Placeholder */}
      <div className="relative z-10 mt-16 w-full max-w-3xl flex justify-center">
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 mb-6 text-gray-600 text-sm">
        Built with ❤️ by Shiv | © GitFlex
      </footer>
    </main>
  );
}
