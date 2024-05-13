"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-col justify-center items-center m-auto gap-4">
        <p>
          <b>
            Hello{" "}
            {isConnected ? (
              <>
                <s>World</s> Web3
              </>
            ) : (
              "World"
            )}
          </b>
        </p>
        <ConnectButton />
      </main>
    </div>
  );
}
