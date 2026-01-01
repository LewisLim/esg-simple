import { ReactNode } from "react";
import { CaretLeftIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  children: ReactNode;
}

export default function ArticleWrapper({ title, children }: Props) {
  const router = useRouter();
  
  return (
    <div>
      <div className="flex items-center mb-2">
        <button type="button" className="p-1 cursor-pointer">
          <CaretLeftIcon
            size={24}
            className="me-4"
            onClick={() => router.back()}
          />
        </button>
        <h1 className="header">{title}</h1>
      </div>
      <div className="pb-12 space-y-8">{children}</div>
    </div>
  );
}
