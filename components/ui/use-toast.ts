import { Toast } from "@/components/ui/toast"

export function useToast() {
  return {
    toast: ({ title, description, variant }: { 
      title?: string;
      description?: string;
      variant?: "default" | "destructive";
    }) => {
      Toast({
        title,
        description,
        variant
      });
    }
  };
}