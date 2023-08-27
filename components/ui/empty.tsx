import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({
  label
}: EmptyProps) => {
  return (
    <div className="h-full p-5 flex flex-col items-center justify-center">
      <div className="relative h-110 w-409">
        <Image src="/GenAIaaS_big.png" width={409} height={110} alt="Empty" />
      </div>
      <p className="text-muted-foreground text-sm text-center">
        {label}
      </p>
    </div>
  );
};