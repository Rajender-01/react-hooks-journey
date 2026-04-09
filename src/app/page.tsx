import Link from 'next/link';

import { hookCategories } from '../data/hooks';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight sm:text-5xl border-b-4 border-blue-500 inline-block pb-2">
            React Hooks Journey
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Explore and learn all the React Hooks with practical examples.
          </p>
        </div>

        <div className="space-y-16">
          {hookCategories.map((group) => (
            <div key={group.category} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {group.category}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.hooks.map((hook) => (
                  <div
                    key={hook.name}
                    className="flex flex-col p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800"
                  >
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        {hook.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {hook.levels.map((level) => (
                        <Link
                          key={level}
                          href={`/hooks/${hook.path}/${level.toLowerCase()}`}
                          className="px-3 py-1.5 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50 transition-colors border border-blue-100 dark:border-blue-800 capitalize"
                        >
                          {level}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
