import { ReactNode } from "react";
import { CaretLeftIcon } from "@phosphor-icons/react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function ArticleWrapper({ title, children }: Props) {
  return (
    <div>
      <div className="flex items-center mb-2">
        <button type="button" className="p-1 cursor-pointer">
          <CaretLeftIcon size={24} className="me-4" />
        </button>
        <h1 className="header">{title}</h1>
      </div>
      <div className="pt-4 pb-12 space-y-4">{children}</div>
    </div>
  );
}
