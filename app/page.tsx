'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contacts', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
              <span className="text-green-600 text-3xl font-bold">Abu</span>
              <span className="text-blue text-3xl font-bold">Talib</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-md font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hello there! do you need a beautiful and functioning website?. you have arrived already.
            </h1>
            <div className="flex justify-between items-center p-6 mt-32">
              <img alt="" src='/images/tw.jpeg' className="h-100 w-80 rounded-full mx-auto" />
              <p className="mt-6 text-lg leading-8 text-gray-600 p-4">
                I'm Abutalib Hasan, a professional web developer, I can help you building your website using the latest web dev technologies and tools.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
              Let's talk!
              </a>
              {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
              <input id="email" name="email" type="email" placeholder="Enter your email" className="lu tu aeb afh arw ayb bbt bbz bcd bcl bgg bnh bni bnu cng cni border-2 p-2 w-80 rounded-md"></input>
            </div>
          </div>
          

      <section id="skills" className="py-10 bg-gray-100 mt-32 w-full">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Image src="/images/html-5.png" alt="HTML" width={100} height={100} className="w-12 h-12 mx-auto mb-2"></Image>
              <p className="text-lg font-medium">HTML</p>
            </div>
            <div className="text-center">
              <Image src="/images/css-3.png" alt="CSS" width={100} height={100} className="w-12 h-12 mx-auto mb-2"></Image>
              <p className="text-lg font-medium">CSS</p>
            </div>
            <div className="text-center">
            <Image src="/images/java-script.png" alt="CSS" width={100} height={100} className="w-12 h-12 mx-auto mb-2"></Image>
              <p className="text-lg font-medium">JavaScript</p>
            </div>
            <div className="text-center">
            <Image src="/images/tailwind.png" alt="CSS" width={100} height={100} className="w-12 h-12 mx-auto mb-2"></Image>
              <p className="text-lg font-medium">Tailwind</p>
            </div>
            
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <Image src="/images/mongo.png" alt="CSS" width={100} height={100} className="w-12 h-12 mx-auto mb-2"></Image>
              <p className="text-lg font-medium">MongoDB</p>
            </div>
            <div className="text-center">
            <Image src="/images/express.png" alt="CSS" width={100} height={100} className="w-12 h-12 mx-auto mb-2"></Image>
              <p className="text-lg font-medium">Express js</p>
            </div>
            <div className="text-center">
              <Image src="/images/react.png" alt="HTML" width={100} height={100} className="w-12 h-12 mx-auto mb-2"></Image>
              <p className="text-lg font-medium">React</p>
            </div>
            <div className="text-center">
            <Image src="/images/nodejs.png" alt="CSS" width={100} height={100} className="w-12 h-12 mx-auto mb-2"></Image>
              <p className="text-lg font-medium">Node js</p>
            </div>
            
            
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <Image src="/images/next.svg" alt="HTML" width={100} height={100} className="w-12 h-12 mx-auto mb-2"></Image>
              <p className="text-lg font-medium">Next js</p>
            </div>
            <div className="text-center">
              <Image src="/images/gitlab.png" alt="CSS" width={100} height={100} className="w-12 h-12 mx-auto mb-2"></Image>
              <p className="text-lg font-medium">GitLab</p>
            </div>
            <div className="text-center">
            <Image src="/images/github.png" alt="CSS" width={100} height={100} className="w-12 h-12 mx-auto mb-2"></Image>
              <p className="text-lg font-medium">GitHub</p>
            </div>
            <div className="text-center">
            <Image src="/images/docker.png" alt="CSS" width={100} height={100} className="w-12 h-12 mx-auto mb-2"></Image>
              <p className="text-lg font-medium">Docker</p>
            </div>
            
            
          </div>
          
        </div>
      </section>
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> */}
      </div>
    </div>
  )
}
