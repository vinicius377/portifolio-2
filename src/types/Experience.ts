import type { ReactNode } from "react";

export interface Experience {
  title: string;
  business: string;
  time: string;
  id: number;
  description: string | ReactNode
}
