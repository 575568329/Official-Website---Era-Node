import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// 合并 Tailwind class 的工具函数
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
