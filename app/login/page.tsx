"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import { useAuth } from "@/contexts/AuthContext";

const dummyUser = {
  email: "test@test.com",
  password: "test123",
};

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
    router.push("/");
  };

  return (
    <PageTransition>
      <div className="container mx-auto flex items-center justify-center min-h-screen ">
        <Card className="w-full max-w-md border-2 border-[#4169E1]/10">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-[#4169E1]">
              Welcome Back
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-[#4169E1]/20 focus:border-[#E17041]/50"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="border-[#4169E1]/20 focus:border-[#E17041]/50"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#4169E1] text-white hover:bg-[#4169E1]/90 transition-colors"
              >
                Login
              </Button>
            </form>
            <div className="mt-6 text-center space-y-4">
              <div className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/signup" className="text-[#E17041] hover:text-[#E17041]/80 hover:underline">
                  Sign Up
                </Link>
              </div>
              <Link 
                href="/forgot-password" 
                className="text-sm text-[#4169E1] hover:text-[#4169E1]/80 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
