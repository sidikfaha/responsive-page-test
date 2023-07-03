import { IconChatBox, IconPlus } from "@/components";
import React from "react";

interface DetailsLinkProps extends React.AllHTMLAttributes<HTMLAnchorElement> {
  eventId: number;
}

const DetailsLink = ({ eventId, ...props }: DetailsLinkProps) => {
  return (
    <a
      {...props}
      href={`#event-${eventId}`}
      className="flex gap-1 text-amber-600 hover:underline"
    >
      <IconPlus /> Event Details
    </a>
  );
};

const GrayLine = () => {
  return <hr className="border-neutral-500" />;
};

export default function Home() {
  const month = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const events = [
    {
      date: new Date(2023, 10, 11),
      start: "16:00",
      end: "19:00",
      address: "144 W Elm St, Chicago, IL 60610, USA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta, expedita dolor vel totam officiis molestiae ex cumque? Debitis facilis qui alias quod corporis nisi id est facere officia voluptates.",
      title: "Sunday Supper Club",
      id: 544576,
    },
    {
      date: new Date(2023, 8, 17),
      start: "16:00",
      end: "19:00",
      address: "144 W Elm St, Chicago, IL 60610, USA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta, expedita dolor vel totam officiis molestiae ex cumque? Debitis facilis qui alias quod corporis nisi id est facere officia voluptates.",
      title: "Sunday Supper Club",
      id: 544576,
    },
    {
      date: new Date(2023, 9, 24),
      start: "16:00",
      end: "19:00",
      address: "144 W Elm St, Chicago, IL 60610, USA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta, expedita dolor vel totam officiis molestiae ex cumque? Debitis facilis qui alias quod corporis nisi id est facere officia voluptates.",
      title: "Sunday Supper Club",
      id: 544576,
    },
    {
      date: new Date(2024, 0, 1),
      start: "16:00",
      end: "19:00",
      address: "144 W Elm St, Chicago, IL 60610, USA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta, expedita dolor vel totam officiis molestiae ex cumque? Debitis facilis qui alias quod corporis nisi id est facere officia voluptates.",
      title: "Sunday Supper Club",
      id: 544576,
    },
    {
      date: new Date(2024, 3, 20),
      start: "16:00",
      end: "19:00",
      address: "144 W Elm St, Chicago, IL 60610, USA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta, expedita dolor vel totam officiis molestiae ex cumque? Debitis facilis qui alias quod corporis nisi id est facere officia voluptates.",
      title: "Sunday Supper Club",
      id: 544576,
    },
    {
      date: new Date(2024, 6, 30),
      start: "16:00",
      end: "19:00",
      address: "144 W Elm St, Chicago, IL 60610, USA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta, expedita dolor vel totam officiis molestiae ex cumque? Debitis facilis qui alias quod corporis nisi id est facere officia voluptates.",
      title: "Sunday Supper Club",
      id: 544576,
    },
  ];

  return (
    <>
      <section className="bg-[#222]">
        <div className="container flex flex-col p-5">
          <h2 className="bg-white text-black uppercase tracking-[.4rem] px-3 py-1 self-center">
            Events
          </h2>

          <div className="flex flex-col text-white [&>*]:border-b [&>*]:border-neutral-400">
            {events.map((event) => {
              const _d = event.date.getDate();
              const day = `${_d < 10 ? '0' : ''}${_d}`
              return (
                <div
                  key={event.id}
                  className="flex flex-col lg:flex-row gap-1 lg:gap-5 py-5 pt-10"
                >
                  <div className="flex md:flex-col uppercase basis-2/5 text-2xl font-bold gap-2 lg:gap-0">
                    <div>
                      <span>{day}</span>
                      {_d === 1 && <span className="hidden md:inline">st</span>}
                      {_d === 2 && <span className="hidden md:inline">nd</span>}
                      {_d === 3 && <span className="hidden md:inline">rd</span>}
                      {_d > 3 && <span className="hidden md:inline">th</span>}
                    </div>
                    <span>{month[event.date.getMonth()]}</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h4 className="text-xl">{event.title}</h4>
                    <GrayLine />
                    <div className="lg:flex flex-col gap-3 hidden">
                      <p className="hidden lg:block text-neutral-500">
                        {event.description}
                      </p>
                      <DetailsLink eventId={event.id} />
                    </div>
                  </div>

                  <div className="flex flex-col lg:text-right gap-3 basis-2/5">
                    <div className="flex flex-col gap-3 self-start lg:self-end">
                      <span className="text-xl">
                        {event.start} - {event.end}
                      </span>
                      <GrayLine />
                    </div>
                    <p className="text-neutral-500">{event.address}</p>
                  </div>

                  <div className="py-4 block lg:hidden">
                    <DetailsLink eventId={event.id} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floatting chat button */}
      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-amber-600 p-3 text-black fixed bottom-5 right-5">
        <IconChatBox />
      </div>
    </>
  );
}
