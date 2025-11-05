"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
            <Leaf className="h-6 w-6 text-forest" />
          </div>
          <span className="text-2xl font-bold text-forest">GreenProof</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            How It Works
          </a>
          <a href="#record" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Record Data
          </a>
          <a href="#verify" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Verify
          </a>
        </nav>

        <ConnectButton 
          label="Connect Wallet"
          accountStatus="avatar"
          chainStatus="icon"
          showBalance={false}
        />
      </div>
    </header>
  );
};

export default Header;
