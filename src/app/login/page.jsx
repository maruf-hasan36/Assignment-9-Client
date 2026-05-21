"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const searchParams = useSearchParams();

  // redirect path
  const redirect = searchParams.get("redirect") || "/";

  // EMAIL LOGIN
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,

      // after login redirect
      callbackURL: redirect,
    });

    if (data) {
      toast.success("Login successful 🎉");
    }

    if (error) {
      toast.error(error.message || "Login failed ❌");
    }
  };

  // GOOGLE LOGIN
  const handelGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",

        // after google login redirect
        callbackURL: redirect,
      });

      toast.success("Google Login Successful");
    } catch (error) {
      toast.error("Google Login Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-gray-950 px-4 pb-20">
      <div className="w-full mt-10 max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white">Welcome Back</h1>

          <p className="text-gray-400 mt-2 text-sm">Login to your account</p>
        </div>

        {/* FORM */}
        <form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
            }}
          >
            <Label className="text-gray-200">Email</Label>

            <Input
              name="email"
              placeholder="Your Email"
              className="bg-white/10 text-white border border-white/10 rounded-xl"
            />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must include at least one uppercase letter";
              }

              if (!/[a-z]/.test(value)) {
                return "Password must include at least one lowercase letter";
              }
            }}
          >
            <Label className="text-gray-200">Password</Label>

            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="bg-white/10 text-white border border-white/10 rounded-xl"
            />

            <Description className="text-xs text-gray-400">
              Must be at least 8 characters, include uppercase and lowercase
            </Description>

            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-2">
            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl h-12 shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <Check />
              Login
            </Button>

            {/* Google Login */}
            <Button
              type="button"
              onClick={handelGoogle}
              variant="outline"
              className="w-full hover:bg-blue-500 text-white font-semibold rounded-xl h-12 shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <FaGoogle />
              Sign in Google
            </Button>

            {/* Reset */}
            <Button
              type="reset"
              variant="secondary"
              className="rounded-xl h-12 px-6 border border-white/10 text-white bg-white/5"
            >
              Reset
            </Button>
          </div>
        </form>

        {/* Bottom */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Dont have an account?{" "}
          <Link href="/register">
            <span className="text-purple-400 cursor-pointer hover:underline">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
