"use client";

import { Instagram, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileSocialBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-background/80 backdrop-blur-sm border-t">
      <div className="container py-2">
        <div className="flex justify-around items-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-pink-500"
            onClick={() => window.open('https://www.instagram.com/asiankids_dancecrew_official/', '_blank')}
          >
            <Instagram className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-green-500"
            onClick={() => window.open('https://wa.me/918138865559', '_blank')}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-500"
            onClick={() => window.open('tel:+918138865559')}
          >
            <Phone className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}