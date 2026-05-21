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
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image: photo,
        callbackURL: "/",
      });
      console.log(data)

      if (error) {
        toast.error(error.message || "Registration failed ");
        return;
      }

      if (data) {
        toast.success("Account created successfully ");
        router.push("/");
      }
    } catch (err) {
      toast.error("Something went wrong ");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-gray-950 px-4 pb-20">
      <div className="w-full mt-10 max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white">Create Account</h1>
          <p className="text-gray-400 mt-2">
            Join with us and start your journey
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <TextField isRequired>
            <Label className="text-gray-200">Name</Label>
            <Input name="name" placeholder="Your name" />
          </TextField>

          <TextField>
            <Label className="text-gray-200">Photo URL</Label>
            <Input name="photo" placeholder="Photo URL" />
          </TextField>

          <TextField isRequired>
            <Label className="text-gray-200">Email</Label>
            <Input name="email" type="email" placeholder="Your Email" />
          </TextField>

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

          <div className="flex gap-3 mt-2">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl h-12"
            >
              <Check />
              Create Account
            </Button>

            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-purple-400 hover:underline">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
