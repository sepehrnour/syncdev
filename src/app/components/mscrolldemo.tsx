import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Build with SyncDevelopment. <br />
          </span>
        }
        src={"/linear.png"}
        showGradient={false}
      />
    </div>
  );
}
