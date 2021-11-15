import Container from "components/Container";
import Layout from "~/components/Layouts/Default";
import { Button, IconBookOpen, Space, Typography } from "@supabase/ui";
import SectionContainer from "../components/Layouts/SectionContainer";
import Link from 'next/link'

export default function Fonoster404() {
  return (
    <Layout>
      <Container>
        <div className="overflow-hidden">
          <SectionContainer className="pb-0 pt-24">
            <div className="relative">
              <main className="">
                <div className="mx-auto">
                  <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                    <div className="md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                      <div className="sm:mx-auto md:w-3/4 lg:w-full lg:mx-0">
                        <h1 className="mt-4 text-4xl text-gray-800 dark:text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                          <span className="block text-gray-800 dark:text-white">
                            404 - Page Not Found
                          </span>
                        </h1>
                      </div>
                    </div>
                    <div className="flex content-center mt-16 sm:mt-24 lg:absolute lg:-right-80 lg:w-9/12 lg:mt-0 lg:col-span-6 xl:relative xl:right-0 xl:w-full">
                      <div className="flex flex-col items-center justify-center relative w-full rounded-md">
                        <div className="w-full rounded-t-md h-5 bg-dark-700 flex items-center justify-start px-2">
                          <div className="h-2 w-2 mr-2 rounded-full bg-dark-500" />
                          <div className="h-2 w-2 mr-2 rounded-full bg-dark-500" />
                          <div className="h-2 w-2 mr-2 rounded-full bg-dark-500" />
                        </div>
                        <div
                          className="w-full relative bg-dark-900 shadow-sm"
                          style={{ padding: "0 0 0 0" }}
                        >
                          <img
                            style={{ top: 0, left: 0 }}
                            src="/images/console.png"
                          />
                        </div>
                        {/*
                      Replace src with the following if have preference:
                      Vimeo:   https://player.vimeo.com/video/485959063?loop=1&autoplay=1
                      Youtube: https://www.youtube-nocookie.com/embed/dBOSUER_5T4?playlist=dBOSUER_5T4&autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&mute=1&muted=1
                     */}
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </SectionContainer>
        </div>
      </Container>
    </Layout>
  );
}
