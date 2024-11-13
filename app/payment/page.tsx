"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, CreditCard, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function PaymentPage() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const [selectedPlan, setSelectedPlan] = React.useState("pro");
  const [paymentMethod, setPaymentMethod] = React.useState("credit-card");
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isLoggedIn) return;
    
    toast({
      title: "Payment Successful",
      description: "Your subscription has been activated.",
    });
    setTimeout(() => {
      router.push("/profile");
    }, 0);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#4169E1]/5">
      <main className="flex-1 py-12">
        <div className="container max-w-md mx-auto px-4 md:px-6">
          <Card className="border-2 border-[#4169E1]/10">
            <CardHeader>
              <CardTitle className="text-[#4169E1]">Subscribe to Padel Club</CardTitle>
              <CardDescription className="text-gray-600">
                Choose your plan and payment method
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLoggedIn && (
                  <div className="flex items-center gap-2 p-4 text-red-500 bg-red-50 rounded-md border border-red-200">
                    <AlertCircle className="h-5 w-5" />
                    <span>
                      Please <Link href="/login" className="underline font-bold text-[#E17041]">log in</Link> to make a payment
                    </span>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="plan" className="text-gray-700">Select Plan</Label>
                  <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                    <SelectTrigger id="plan" className="border-[#4169E1]/20 focus:border-[#E17041]/50">
                      <SelectValue placeholder="Select a plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic - $29/month</SelectItem>
                      <SelectItem value="pro">Pro - $49/month</SelectItem>
                      <SelectItem value="elite">Elite - $79/month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700">Payment Method</Label>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit-card" id="credit-card" className="text-[#E17041]" />
                      <Label htmlFor="credit-card" className="text-gray-700">Credit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paypal" id="paypal" className="text-[#E17041]" />
                      <Label htmlFor="paypal" className="text-gray-700">PayPal</Label>
                    </div>
                  </RadioGroup>
                </div>

                {paymentMethod === "credit-card" && (
                  <div className="space-y-2">
                    <Label htmlFor="card-number" className="text-gray-700">Card Number</Label>
                    <Input 
                      id="card-number" 
                      placeholder="1234 5678 9012 3456" 
                      className="border-[#4169E1]/20 focus:border-[#E17041]/50"
                    />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <Label htmlFor="expiry-date" className="text-gray-700">Expiry Date</Label>
                        <Input 
                          id="expiry-date" 
                          placeholder="MM/YY" 
                          className="border-[#4169E1]/20 focus:border-[#E17041]/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc" className="text-gray-700">CVC</Label>
                        <Input 
                          id="cvc" 
                          placeholder="123" 
                          className="border-[#4169E1]/20 focus:border-[#E17041]/50"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="text-center text-gray-600">
                    You will be redirected to PayPal to complete your purchase.
                  </div>
                )}

                <Button 
                  type="submit" 
                  disabled={!isLoggedIn}
                  className={`w-full ${
                    isLoggedIn 
                      ? "bg-[#E17041] hover:bg-[#E17041]/90" 
                      : "bg-gray-400"
                  } text-white transition-colors`}
                >
                  {isLoggedIn ? "Proceed to Payment" : "Login Required"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="justify-between border-t border-[#4169E1]/10 pt-4">
              <p className="text-sm text-gray-600">
                Secure payment processed by Stripe
              </p>
              <Link href="/" className="text-sm text-[#4169E1] hover:text-[#4169E1]/80 hover:underline">
                Cancel
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
