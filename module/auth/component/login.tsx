"use client";

import React, { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGitHubLogin = async () => {
    try {
      setIsLoading(true);
      await signIn.social({
        provider: "github",
        callbackURL: "/",
      });
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error at authentication", error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Hero Text */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold"></span>
            </div>
            <span className="text-foreground text-xl font-semibold">
              AI-Reviewer
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Cut Code Review
            <br />
            Time & Bugs in <span className="text-primary">Half</span>.<br />
            <span className="text-primary">Instantly</span>.
          </h1>

          <p className="text-muted-foreground text-lg font-mono">
            Supercharge your team to ship faster with the most
            <br />
            advanced AI code reviews.
          </p>
        </div>

        {/* Right Side - Login Card */}
        <div className="flex justify-center lg:justify-end">
          <Card className="w-full max-w-md bg-card border-border p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  Welcome Back
                </h2>
                <p className="text-muted-foreground text-sm">
                  Login using the following providers:
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleGitHubLogin}
                  disabled={isLoading}
                  className="w-full h-12 bg-secondary hover:bg-accent text-secondary-foreground flex items-center justify-center gap-3 cursor-pointer"
                  variant="outline">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{isLoading ? "Signing in..." : "Github"}</span>
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-muted-foreground text-sm">
                  New to AI-Reviewer?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Sign Up
                  </a>
                </p>
              </div>

              <div className="text-center text-xs text-muted-foreground pt-4">
                By continuing, you agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>{" "}
                applicable to AI-Reviewer
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
