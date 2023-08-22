import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
      <Image fill alt="Logo" src="/logo.png" sizes="width: auto, height:auto"/>
      </div>
      <p className="text-sm text-muted-foreground">
        thinking...
      </p>
    </div>
  );
};