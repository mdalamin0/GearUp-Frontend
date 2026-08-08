"use client";

import { useEffect, useRef } from "react";

type Props = {
  onSuccess: (idToken: string) => void;
};

const GoogleLoginButton = ({ onSuccess }: Props) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.google || !buttonRef.current) return;

    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      callback: (response) => {
        if (!response.credential) return;

        onSuccess(response.credential);
      },
    });

    window.google.accounts.id.renderButton(buttonRef.current, {
      type: "standard",
      theme: "outline",
      size: "large",
      text: "continue_with",
      shape: "rectangular",
      width: 400,
    });
  }, [onSuccess]);

  return <div ref={buttonRef} className="flex w-full justify-center" />;
};

export default GoogleLoginButton;
