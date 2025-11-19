import { Dispatch, SetStateAction } from "react";

type MenuToggleButtonProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export function MenuToggleButton({
  open,
  setOpen,
}: Readonly<MenuToggleButtonProps>) {
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="md:hidden inline-flex items-center justify-center p-2"
      aria-label="Toggle menu"
      aria-pressed={open}
    >
      <span className="relative h-[19px] w-6">
        <span
          className={[
            "absolute left-0 h-[3px] w-6 rounded-full bg-neutral-300",
            "transition-transform duration-200 ease-in-out",
            open ? "translate-y-2 rotate-45" : "translate-y-0 rotate-0",
          ].join(" ")}
        />
        <span
          className={[
            "absolute left-0 h-[3px] w-6 rounded-full bg-neutral-300",
            "transition-transform duration-200 ease-in-out translate-y-2",
            open ? "-rotate-45" : "rotate-0",
          ].join(" ")}
        />
        <span
          className={[
            "absolute left-0 h-[3px] w-4 rounded-full bg-neutral-300",
            "transition-all duration-150 ease-in-out",
            open
              ? "opacity-0 scale-x-0"
              : "opacity-100 scale-x-100 translate-y-4",
          ].join(" ")}
        />
      </span>
    </button>
  );
}
