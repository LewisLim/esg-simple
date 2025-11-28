import { ReactNode } from "react";
import { CaretLeftIcon } from "@phosphor-icons/react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function ArticleWrapper({ title, children }: Props) {
  return (
    <div>
      <div className="flex items-center mb-4">
        <button type="button" className="p-1 cursor-pointer">
          <CaretLeftIcon size={24} className="me-4" />
        </button>
        <h1>{title}</h1>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
