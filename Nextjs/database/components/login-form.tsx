
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CardDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Email Login
  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/dashboard",
      });

      if (error) {
        setError(error.message);
      }
    } catch {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const onLoginWithGoogle = async () => {
    setError("");
    setLoading(true);

    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });

      if (error) {
        setError(error.message);
        setLoading(false);
      }
    } catch {
      setError("Google login failed");
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>

        <CardDescription>
          Enter your email below to login
        </CardDescription>

        <CardAction>
          <Button type="button" variant="link">
            Sign Up
          </Button>
        </CardAction>
      </CardHeader>

      <form onSubmit={onLogin}>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
          </div>
        </CardContent>

        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </CardFooter>
      </form>

      <CardFooter>
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={onLoginWithGoogle}
          disabled={loading}
        >
          {loading ? "Please wait..." : "Login with Google"}
        </Button>
      </CardFooter>
    </Card>
  );
}
