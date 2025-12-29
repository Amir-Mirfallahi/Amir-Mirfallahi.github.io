import { toast as sonnerToast } from "sonner";
interface ToastProps {
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
  action?: {
    label: string;
    onClick: () => void;
  };
}

const toast = ({
  title,
  description,
  variant,
  action,
  ...props
}: ToastProps) => {
  const method = variant === "destructive" ? sonnerToast.error : sonnerToast;

  return method(title, {
    description,
    action: action
      ? {
          label: action.label,
          onClick: action.onClick,
        }
      : undefined,
    ...props,
  });
};

function useToast() {
  return {
    toast,
    // Sonner provides id-based dismissal or global dismissal
    dismiss: (id?: string | number) => sonnerToast.dismiss(id),
  };
}

export { useToast, toast };
