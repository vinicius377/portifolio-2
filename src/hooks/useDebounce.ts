import { useRef } from "react";

interface Props {
  delay: number;
  fn: (args?: any) => void;
}

export function useDebounce({ delay, fn }: Props) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const trigger = (args?: any) => {
    window.clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      fn(args);
    }, delay);
  };

  return {
    trigger,
    clear: () => window.clearInterval(timeoutRef.current),
  };
}
