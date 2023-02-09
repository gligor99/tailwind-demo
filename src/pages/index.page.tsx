import Head from 'next/head'
import {
  FolderPlusIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { AnimatedDesc } from '@/components/common/animated-desc'
import { SnapComponent } from '@/components/common/snap'
import Link from 'next/link'
interface PersonProps {
  name: string
  email: string
  img: string
  title?: string
}

const persons: PersonProps[] = [
  {
    name: 'Kristen Ramos',
    email: 'kristen@example.com',
    img: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Regional Paradigm Technician',
  },
  {
    name: 'Floyd Miles',
    email: 'floyd@example.com',
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Senior Designer',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney@example.com',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Product Directives Officer	',
  },
  {
    name: 'Ted Fox',
    email: 'ted@example.com',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'VP, Hardware Engineering',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>TailwindCSS - Demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Blobs */}
        {/* <div className="absolute top-10 -left-4 h-96 w-96  animate-globalBlob rounded-full bg-purple-300 opacity-40 mix-blend-multiply blur-2xl filter"></div>
        <div className="animation-delay-2000 fixed top-0 -right-4 h-96 w-96 animate-globalBlob rounded-full bg-yellow-300 opacity-40 mix-blend-multiply blur-2xl filter"></div>
        <div className="animation-delay-4000 absolute left-20 -bottom-8 h-96 w-96 animate-globalBlob rounded-full bg-pink-300 opacity-40 mix-blend-multiply blur-2xl filter"></div> */}
        {/* End of Blobs */}
        <div className="mx-auto mt-10 flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
          <div className="shrink-0">
            <div className="h-12 w-12 bg-sky-400"></div>
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-slate-500">You have a new message!</p>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-xl items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
          <Link href="/scroll-demo">
            <button className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Scroll Indicator Demo
            </button>
          </Link>
          <Link href="/parallax-demo">
            <button className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Parallax Demo
            </button>
          </Link>
          <Link href="/card-reveal">
            <button className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Card Reveal Demo
            </button>
          </Link>
        </div>

        <div className="mx-auto mt-10 max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-xl sm:flex sm:items-center sm:space-y-0 sm:space-x-6 sm:py-4">
          <img
            src="https://bit.ly/dan-abramov"
            alt="Avatar"
            className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          />
          <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg font-semibold text-black">Erin Linford</p>
              <p className="font-medium text-slate-500">Product Manager</p>
            </div>
            <button className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Message
            </button>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-sm space-x-2">
          <button className="rounded-full border border-violet-500 bg-violet-500 px-4 py-2 text-base font-semibold  text-white hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700">
            Save changes
          </button>
          <button className="rounded-full border border-purple-200 bg-white px-4 py-2 text-base font-semibold  text-violet-700 hover:border-transparent  hover:bg-violet-500 hover:text-white focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700">
            Edit Profile
          </button>
        </div>

        <div className="mx-auto mt-10 max-w-sm rounded-xl bg-white shadow-xl">
          <ul role={'list'} className="divide-y divide-slate-200 p-6">
            {persons.map((p) => {
              return (
                <li key={p.name} className="flex py-4 first:pt-0 last:pb-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={p.img}
                    alt={`${p.name} Avatar`}
                  />
                  <div className="ml-3 overflow-hidden">
                    <p className="text-sm font-medium text-slate-900">
                      {p.name}
                    </p>
                    <p className="truncate text-sm text-slate-500">{p.email}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="relative mx-5 mt-10  mb-10  max-w-3xl overflow-x-auto rounded-xl bg-white shadow-xl md:mx-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {persons.map((p) => {
                return (
                  <tr
                    key={p.name}
                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <td className="px-6 py-4">{p.name}</td>
                    <td className="px-6 py-4">{p.title}</td>
                    <td className="px-6 py-4">{p.email}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <a
          href="#"
          className="group mx-auto mb-10 block max-w-sm space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="flex items-center space-x-3">
            <FolderPlusIcon className="h-6 w-6 stroke-blue-300" />
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-white">
              New project
            </h3>
          </div>
          <p className="text-sm text-slate-500 group-hover:text-white">
            Create a new project from a variety of starting templates.
          </p>
        </a>

        <div className="mx-auto max-w-2xl">
          <blockquote className="text-center text-2xl font-semibold italic text-slate-900">
            When you look
            <span className="relative ml-3 mr-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
              <span className="relative  text-white">annoyed</span>
            </span>
            all the time, people think that you are busy.
          </blockquote>
        </div>

        <div className=" mx-auto my-10 max-w-md">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <MagnifyingGlassIcon className="h-5 w-5 stroke-blue-500" />
            </span>
            <input
              className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
        </div>

        <div className="mx-auto my-10 max-w-lg rounded-xl bg-white py-2 px-4 shadow-xl">
          <form className="flex items-center space-x-6">
            <div className="shrink-0">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                alt="Current profile photo"
              />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                className="block w-full text-sm text-slate-500
      file:mr-4 file:rounded-full file:border-0
      file:bg-violet-50 file:py-2
      file:px-4 file:text-sm
      file:font-semibold file:text-violet-700
      hover:file:bg-violet-100
    "
              />
            </label>
          </form>
        </div>

        <div className="my-10 mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-lg md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                src="https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489_1280.jpg"
                alt="Building Logo"
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
                Company Retreats
              </div>
              <a
                href="#"
                className="mt-1 block text-lg font-medium leading-tight text-black hover:opacity-50"
              >
                Incredible accommodation for your team
              </a>
              <p className="mt-2 text-slate-500">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>

        <AnimatedDesc />
        <div className="mx-auto max-w-3xl ">
          <SnapComponent />
        </div>
      </main>
    </>
  )
}
