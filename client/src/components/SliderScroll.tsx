import React from "react";
import Card from "@/components/Card";

interface Course {
  id: number;
  title: string;
  headline: string;
  instructor: string;
  price: string;
  img: string;
  created_at: string;
  updated_at: string;
}

interface Props {
  data: Course[] | null;
}

export default function SliderScroll(props: Props) {
  const { data } = props;

  return (
    <div>
      <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto py-6 px-4 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
        {data &&
          data.map(({ id, title, img, headline }: Course) => (
            <div key={id} className="snap-center shrink-0">
              <Card title={title} img={img} headline={headline} />
            </div>
          ))}
      </div>
    </div>
  );
}
